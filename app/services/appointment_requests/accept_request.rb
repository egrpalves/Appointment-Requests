module AppointmentRequests
  class AcceptRequest
    def initialize(appointment_request)
      @appointment_request = appointment_request
    end

    def call
      AppointmentRequest.transaction do
        appointment_request.lock!
        appointment_request.update!(status: "accepted")
        reject_overlapping_pending_requests!
      end

      AppointmentMailer.request_answered(appointment_request).deliver_later
      appointment_request
    end

    private

    attr_reader :appointment_request

    def duration
      appointment_request.service&.duration_minutes || 60
    end

    def reject_overlapping_pending_requests!
      accepted_start = appointment_request.requested_at
      accepted_end = accepted_start + duration.minutes

      AppointmentRequest.pending
        .where(nutritionist_id: appointment_request.nutritionist_id)
        .where.not(id: appointment_request.id)
        .includes(:service)
        .lock
        .find_each do |request|
          next unless overlapping?(request, accepted_start, accepted_end)

          request.update!(status: "rejected")
          AppointmentMailer.request_answered(request).deliver_later
        end
    end

    def overlapping?(request, accepted_start, accepted_end)
      request_start = request.requested_at
      request_end = request_start + (request.service&.duration_minutes || 60).minutes

      request_start < accepted_end && accepted_start < request_end
    end
  end
end
