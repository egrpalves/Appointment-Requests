require "rails_helper"

RSpec.describe "Api::Nutritionists", type: :request do
  before(:each) do
    @endpoint = "/api/nutritionists"
  end
  describe "GET /api/nutritionists" do
    let!(:nutritionist_braga) do
      n = create(:nutritionist, name: "Ana Braga")
      create(:service, nutritionist: n, name: "Consult", location: "Braga")
      n
    end

    let!(:nutritionist_porto) do
      n = create(:nutritionist, name: "Rui Porto")
      create(:service, nutritionist: n, name: "Consult", location: "Porto")
      n
    end

    context "with no params (defaults to Braga)" do
      it "returns nutritionists in Braga" do
      get @endpoint, params: { location: "Braga" }
        expect(response).to have_http_status(:ok)
        body = JSON.parse(response.body)
        names = body["nutritionists"].map { |n| n["name"] }
        expect(names).to include("Ana Braga")
        expect(names).not_to include("Rui Porto")
      end
    end

    context "filtering by query" do
      it "matches by nutritionist name" do
      get @endpoint, params: { query: "ana", location: "Braga" }
        body = JSON.parse(response.body)
        expect(body["nutritionists"].map { |n| n["name"] }).to include("Ana Braga")
      end

      it "matches by service name" do
        create(:service, nutritionist: nutritionist_braga, name: "Sport Nutrition", location: "Braga")
      get @endpoint, params: { query: "Sport", location: "Braga" }
        body = JSON.parse(response.body)
        expect(body["nutritionists"].map { |n| n["name"] }).to include("Ana Braga")
      end
    end

    context "pagination" do
      before do
        10.times do
          n = create(:nutritionist)
          create(:service, nutritionist: n, location: "Braga")
        end
      end

      it "returns pagination metadata" do
      get @endpoint, params: { location: "Braga", per_page: 5 }
        body = JSON.parse(response.body)
        expect(body["meta"]).to include("total", "page", "per_page", "total_pages")
      end
    end

    context "response structure" do
      it "includes services for each nutritionist" do
      get @endpoint, params: { location: "Braga" }
        body = JSON.parse(response.body)
        nut = body["nutritionists"].find { |n| n["name"] == "Ana Braga" }
        expect(nut["services"]).to be_an(Array)
        expect(nut["services"].first).to include("name", "price", "location", "duration_minutes")
      end
    end
  end
end
