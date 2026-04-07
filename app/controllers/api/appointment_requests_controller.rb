module Api
  class AppointmentRequestsController < BaseController
    # Method: GET
    # Route: /api/appointment_requests?nutritionist_id=

    def index
      nutritionist = ::Nutritionist.find(params[:nutritionist_id])
      requests = nutritionist.appointment_requests
        .includes(:service)
        .where(status: params[:status] || "pending")
        .order(requested_at: :asc)

      render json: requests.map { |r| serialize_request(r) }
    end

    # Method: POST
    # Route: /api/appointment_requests

    def create
      nutritionist_id = create_params[:nutritionist_id]

      if nutritionist_id.blank?
        return render json: { errors: "nutritionist_id is required" }, status: :unprocessable_entity
      end

      nutritionist = ::Nutritionist.find(nutritionist_id)
      request = AppointmentRequests::CreateRequest.new(
        create_params.merge(nutritionist: nutritionist)
      ).call

      render json: serialize_request(request), status: :created

    rescue ActiveRecord::RecordNotFound
      render json: { error: "Nutritionist not found" }, status: :not_found
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    # Method: PATCH
    # Route: /api/appointment_requests/:id

    def update
      appointment = AppointmentRequest.find(params[:id])

      case params[:status]
      when "accepted"
        appointment.accept!
      when "rejected"
        appointment.reject!
        AppointmentMailer.request_answered(appointment).deliver_later
      else
        return render json: { error: "Invalid status" }, status: :unprocessable_entity
      end

      render json: serialize_request(appointment)
    end

    private

    def create_params
      params.require(:appointment_request).permit(
        :nutritionist_id, :service_id, :guest_name, :guest_email, :requested_at
      )
    end

    def serialize_request(r)
      {
        id: r.id,
        guest_name: r.guest_name,
        guest_email: r.guest_email,
        requested_at: r.requested_at,
        status: r.status,
        nutritionist_id: r.nutritionist_id,
        service: r.service ? {
          id: r.service.id,
          name: r.service.name,
          location: r.service.location,
          duration_minutes: r.service.duration_minutes
        } : nil
      }
    end
  end
end
