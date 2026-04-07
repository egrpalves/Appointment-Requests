module Api
  class NutritionistsController < BaseController
    # Method: GET
    # Route: /api/nutritionists?query=&location=&lat=&lng=&page=
    def index
      page = (params[:page]).to_i || 1
      limit = (params[:limit]).to_i || 3

      nutritionists = Nutritionist.search(
        query: params[:query],
        location: params[:location].presence || "Braga",
        lat: params[:lat],
        lng: params[:lng]
      )

      if page > 0 && limit > 0

        total = nutritionists.count
        nutritionists = nutritionists.limit(limit).offset((page - 1) * limit)

        lat = params[:lat]&.to_f
        lng = params[:lng]&.to_f

        render json: {
          nutritionists: nutritionists.map { |n|
            n.as_json_with_services(location_lat: lat, location_lng: lng)
          },
          meta: {
            total: total,
            page: page,
            limit: limit,
            total_pages: (total.to_f / limit).ceil
          }
        }
      else
        render json: {
          nutritionists: nutritionists.map { |n|
            n.as_json_with_services(location_lat: lat, location_lng: lng)
          },
          meta: nil
        }
      end
    end
  end
end
