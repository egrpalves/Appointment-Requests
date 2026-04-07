require "rails_helper"

RSpec.describe Service, type: :model do
  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:location) }
    it { should validate_presence_of(:duration_minutes) }
    it { should validate_numericality_of(:price).is_greater_than_or_equal_to(0) }
    it { should validate_numericality_of(:duration_minutes).is_greater_than(0) }
    it { should belong_to(:nutritionist) }
  end

  describe "#as_json_with_distance" do
    let(:service) do
      build(:service, lat: 41.5518, lng: -8.4229, price: 60.0, duration_minutes: 60)
    end

    it "returns correct fields without coordinates" do
      result = service.as_json_with_distance
      expect(result).to include(:name, :price, :location, :duration_minutes)
      expect(result[:distance_km]).to be_nil
    end

    it "includes distance_km when coordinates provided" do
      result = service.as_json_with_distance(41.5518, -8.4229)
      expect(result[:distance_km]).to eq(0.0)
    end
  end
end
