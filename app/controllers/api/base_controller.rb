module Api
  class BaseController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable
    rescue_from ActiveRecord::RecordNotUnique, with: :record_not_unique

    private

    def not_found(e)
      render json: { error: e.message }, status: :not_found
    end

    def unprocessable(e)
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_unique(_e)
      render json: { errors: [ "A pending appointment request already exists for this email" ] }, status: :unprocessable_entity
    end
  end
end
