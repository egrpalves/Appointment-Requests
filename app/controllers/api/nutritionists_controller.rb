module Api
  class NutritionistsController < BaseController
    # Method: GET
    # Route: /api/nutritionists?query=&location=&lat=&lng=&page=
    def index
      page = params[:page].to_i
      page = 1 if page <= 0
      per_page = (params[:per_page] || params[:limit]).to_i
      per_page = 3 if per_page <= 0
      all = params[:all].to_s === "true"

      # Allows to fetch all nutritionists for testing /dashboard view
      location = all ? nil : params[:location].presence || "Braga"

      nutritionists = Nutritionist.search(
        query: params[:query],
        location: location,
        lat: params[:lat],
        lng: params[:lng]
      )

      if page > 0 && per_page > 0

        total = nutritionists.count
        nutritionists = nutritionists.limit(per_page).offset((page - 1) * per_page)

        lat = params[:lat]&.to_f
        lng = params[:lng]&.to_f

        render json: {
          nutritionists: nutritionists.as_json(location_lat: lat, location_lng: lng),
          meta: {
            total: total,
            page: page,
            per_page: per_page,
            total_pages: (total.to_f / per_page).ceil
          }
        }
      else
        render json: {
          nutritionists: nutritionists.as_json(location_lat: lat, location_lng: lng),
          meta: nil
        }
      end
    end
  end
end
