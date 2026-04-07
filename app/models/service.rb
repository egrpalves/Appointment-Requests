class Service < ApplicationRecord
  belongs_to :nutritionist
  has_many :appointment_requests, dependent: :nullify

  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :location, presence: true
  validates :duration_minutes, presence: true, numericality: { greater_than: 0 }

  def as_json_with_distance(lat = nil, lng = nil)
    data = {
      id: id,
      name: name,
      price: price.to_f,
      location: location,
      duration_minutes: duration_minutes,
      lat: self.lat,
      lng: self.lng
    }

    if lat && lng && self.lat && self.lng
      data[:distance_km] = haversine_distance(lat.to_f, lng.to_f, self.lat, self.lng).round(1)
    end

    data
  end

  private

  def haversine_distance(lat1, lng1, lat2, lng2)
    rad_per_deg = Math::PI / 180
    r = 6371

    dlat = (lat2 - lat1) * rad_per_deg
    dlng = (lng2 - lng1) * rad_per_deg

    a = Math.sin(dlat / 2)**2 +
        Math.cos(lat1 * rad_per_deg) * Math.cos(lat2 * rad_per_deg) *
        Math.sin(dlng / 2)**2

    2 * r * Math.asin(Math.sqrt(a))
  end
end
