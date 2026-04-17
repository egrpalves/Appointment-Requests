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
      request = AppointmentRequest.new(@attributes)
      request.errors.add(:base, "A pending appointment request already exists for this email with this nutritionist")
      raise ActiveRecord::RecordInvalid.new(request)
    end

    private

    attr_reader :attributes

    def nutritionist_id
      attributes[:nutritionist_id] || attributes[:nutritionist]&.id
    end

    def guest_email
      attributes.fetch(:guest_email)
    end

    def invalidate_existing_pending_requests!
      AppointmentRequest.invalidate_pending_for(guest_email, nutritionist_id: nutritionist_id)
    end
  end
end
