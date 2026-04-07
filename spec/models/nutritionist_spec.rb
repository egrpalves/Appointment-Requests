require "rails_helper"

RSpec.describe Nutritionist, type: :model do
  describe "validations" do
    before { create(:nutritionist) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
  end

  describe "associations" do
    it { should have_many(:services).dependent(:destroy) }
    it { should have_many(:appointment_requests).dependent(:destroy) }
  end

  describe ".search" do
    let!(:braga_nutritionist) do
      n = create(:nutritionist, name: "Maria Ana", specialty: "Clinical Nutrition")
      create(:service, nutritionist: n, name: "Online Follow-up", location: "Braga")
      n
    end

    let!(:porto_nutritionist) do
      n = create(:nutritionist, name: "Paulo Antunes")
      create(:service, nutritionist: n, name: "Weight management", location: "Porto")
      n
    end

    it "returns all nutritionists with default Braga location when no location given" do
      results = Nutritionist.search()
      expect(results).to include(braga_nutritionist)
      expect(results).not_to include(porto_nutritionist)
    end

    it "filters by nutritionist name (case: insentitive)" do
      results = Nutritionist.search(query: "maria", location: "Braga")
      expect(results).to include(braga_nutritionist)
      expect(results).not_to include(porto_nutritionist)
    end

    it "filters by service name" do
      results = Nutritionist.search(query: "Online Follow-up", location: "Braga")
      expect(results).to include(braga_nutritionist)
    end

    it "filters by location" do
      results = Nutritionist.search(location: "Porto")
      expect(results).to include(porto_nutritionist)
      expect(results).not_to include(braga_nutritionist)
    end

    it "returns empty when no match" do
      results = Nutritionist.search(query: "qwerty", location: "Coimbra")
      expect(results).to be_empty
    end
  end
end
