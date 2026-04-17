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

      render json: requests.as_json
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

      render json: request.as_json, status: :created

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
      else
        return render json: { error: "Invalid status" }, status: :unprocessable_entity
      end

      render json: appointment.as_json
    end

    private

    def create_params
      params.require(:appointment_request).permit(
        :nutritionist_id, :service_id, :guest_name, :guest_email, :requested_at
      )
    end
  end
end
