class AppointmentRequest < ApplicationRecord
  belongs_to :nutritionist
  belongs_to :service

  enum :status, {
    pending: "pending",
    accepted: "accepted",
    rejected: "rejected"
  }, default: :pending

  validates :guest_name, presence: true
  validates :guest_email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :requested_at, presence: true
  validates :status, inclusion: { in: statuses.keys }

  def self.invalidate_pending_for(guest_email, nutritionist_id:, except_id: nil)
    transaction do
      scope = pending.where(guest_email: guest_email, nutritionist_id: nutritionist_id)
      scope = scope.where.not(id: except_id) if except_id
      scope.lock.update_all(
        status: "rejected",
        updated_at: Time.current
      )
    end
  end

  def as_json(options = {})
    {
      id: id,
      guest_name: guest_name,
      guest_email: guest_email,
      requested_at: requested_at,
      status: status,
      nutritionist_id: nutritionist_id,
      service: service&.as_json
    }.merge(options)
  end

  def accept!
    AppointmentRequests::AcceptRequest.new(self).call
  end

  def reject!
    transaction do
      update!(status: "rejected")
      AppointmentMailer.request_answered(self).deliver_later
    end
  end
end
