class Nutritionist < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  has_many :services, dependent: :destroy
  has_many :appointment_requests, dependent: :destroy

  def self.search(query: nil, location: "Braga", lat: nil, lng: nil)
    scope = joins(:services).distinct

    if query.present?
      like = "%#{sanitize_sql_like(query)}%"
      scope = scope.where("nutritionists.name ILIKE ? OR services.name ILIKE ?", like, like)
    end

    if location.present?
      scope = scope.where("services.location ILIKE ?", "%#{sanitize_sql_like(location)}%")
    end

    if lat && lng
      inner_sql = scope
        .select("nutritionists.*, MIN(#{haversine_sql(lat, lng)}) AS min_distance")
        .group("nutritionists.id")
        .order("min_distance ASC")
        .to_sql

      scope = Nutritionist
        .from("(#{inner_sql}) AS nutritionists")
        .select("nutritionists.*")
        .order("min_distance ASC")
    else
      scope = scope.order("nutritionists.name ASC")
    end

    scope
  end

  def as_json_with_services(location_lat: nil, location_lng: nil)
    {
      id: id,
      name: name,
      specialty: specialty,
      bio: bio,
      photo_url: photo_url,
      services: services.map { |s|
        s.as_json_with_distance(location_lat, location_lng)
      }
    }
  end

  private

  def self.haversine_sql(lat, lng)
    lat_f = lat.to_f
    lng_f = lng.to_f
    <<~SQL.squish
      (6371 *
        acos(
          LEAST(
            1.0,
            cos(radians(#{lat_f})) *
            cos(radians(services.lat)) *
            cos(
              radians(services.lng) -
              radians(#{lng_f})
            ) +
            sin(radians(#{lat_f})) *
            sin(radians(services.lat))
          )
        )
      )
    SQL
  end
end
