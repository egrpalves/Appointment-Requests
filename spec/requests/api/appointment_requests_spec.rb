require "rails_helper"

RSpec.describe "Api::AppointmentRequests", type: :request do
  let(:nutritionist) { create(:nutritionist) }
  let(:service) { create(:service, nutritionist: nutritionist) }

  before(:each) do
    @endpoint = "/api/appointment_requests"
  end

  describe "GET /api/appointment_requests" do
    let!(:pending_request) do
      create(:appointment_request, nutritionist: nutritionist, service: service, status: "pending")
    end
    let!(:accepted_request) do
      create(:appointment_request, nutritionist: nutritionist, service: service, status: "accepted")
    end

    it "returns only pending requests by default" do
      get @endpoint, params: { nutritionist_id: nutritionist.id }
      body = JSON.parse(response.body)
      statuses = body.map { |r| r["status"] }
      expect(statuses).to all(eq("pending"))
    end

    it "returns accepted requests when filtered" do
      get @endpoint, params: { nutritionist_id: nutritionist.id, status: "accepted" }
      body = JSON.parse(response.body)
      expect(body.map { |r| r["status"] }).to all(eq("accepted"))
    end

    it "returns 404 for unknown nutritionist" do
      get @endpoint, params: { nutritionist_id: -1 }
      expect(response).to have_http_status(:not_found)
    end
  end

  describe "POST /api/appointment_requests" do
    let(:valid_params) do
      {
        appointment_request: {
          nutritionist_id: nutritionist.id,
          service_id: service.id,
          guest_name: "Test guest",
          guest_email: "guest@email.com",
          requested_at: 2.days.from_now.iso8601
        }
      }
    end

    it "creates a pending appointment request" do
      post @endpoint, params: valid_params, as: :json
      expect(response).to have_http_status(:created)
      body = JSON.parse(response.body)
      expect(body["status"]).to eq("pending")
      expect(body["guest_name"]).to eq("Test guest")
    end

    it "invalidates previous pending requests from the same guest" do
      old = create(
        :appointment_request,
        nutritionist: nutritionist,
        service: service,
        guest_email: "guest@email.com",
        status: "pending"
      )
      post @endpoint, params: valid_params, as: :json
      expect(old.reload.status).to eq("rejected")
    end

    it 'returns 422 for missing required fields' do
      post @endpoint, params: { appointment_request: { guest_name: "" } }, as: :json
      expect(response).to have_http_status(:unprocessable_content)
    end
  end

  describe "PATCH /api/appointment_requests/:id" do
    let!(:req) do
      create(:appointment_request,
        nutritionist: nutritionist, service: service, status: "pending")
    end

    it "accepts a pending request" do
      patch "/api/appointment_requests/#{req.id}", params: { status: "accepted" }, as: :json
      expect(response).to have_http_status(:ok)
      expect(req.reload.status).to eq("accepted")
    end

    it "rejects a pending request" do
      patch "/api/appointment_requests/#{req.id}", params: { status: "rejected" }, as: :json
      expect(response).to have_http_status(:ok)
      expect(req.reload.status).to eq("rejected")
    end

    it "rejects invalid status" do
      patch "/api/appointment_requests/#{req.id}", params: { status: "invalid" }, as: :json
      expect(response).to have_http_status(:unprocessable_content)
    end

    it "returns 404 for unknown request" do
      patch "/api/appointment_requests/0", params: { status: "accepted" }, as: :json
      expect(response).to have_http_status(:not_found)
    end
  end
end
