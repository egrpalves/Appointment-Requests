class AppointmentRequest < ApplicationRecord
  belongs_to :nutritionist
  belongs_to :service, optional: true

  enum :status, {
    pending: "pending",
    accepted: "accepted",
    rejected: "rejected"
  }, default: :pending

  validates :guest_name, presence: true
  validates :guest_email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :requested_at, presence: true
  validates :status, inclusion: { in: statuses.keys }

  def self.invalidate_pending_for(guest_email, except_id: nil)
    transaction do
      scope = pending.where(guest_email: guest_email)
      scope = scope.where.not(id: except_id) if except_id
      scope.lock.update_all(
        status: "rejected",
        updated_at: Time.current
      )
    end
  end

  def accept!
    AppointmentRequests::AcceptRequest.new(self).call
  end

  def reject!
    update!(status: "rejected")
  end
end
