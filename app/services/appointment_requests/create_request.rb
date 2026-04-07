module AppointmentRequests
  class CreateRequest
    def initialize(attributes)
      @attributes = attributes
    end

    def call
      AppointmentRequest.transaction do
        invalidate_existing_pending_requests!
        AppointmentRequest.create!(@attributes)
      end
    rescue ActiveRecord::RecordNotUnique
      raise ActiveRecord::RecordInvalid.new(AppointmentRequest.new),
            "A pending appointment request already exists for this email"
    end

    private

    attr_reader :attributes

    def guest_email
      attributes.fetch(:guest_email)
    end

    def invalidate_existing_pending_requests!
      scope = AppointmentRequest.pending.where(guest_email: guest_email)
      scope.lock.update_all(
        status: "rejected",
        updated_at: Time.current
      )
    end
  end
end
