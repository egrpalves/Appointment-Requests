require "rails_helper"

RSpec.describe AppointmentRequest, type: :model do
  describe "validations" do
    it { should validate_presence_of(:guest_name) }
    it { should validate_presence_of(:guest_email) }
    it { should validate_presence_of(:requested_at) }
    it { should belong_to(:nutritionist) }
    it { should belong_to(:service) }
  end

  describe "default status" do
    it "sets status to pending on create" do
      req = create(:appointment_request)
      expect(req.status).to eq("pending")
    end
  end

  describe ".invalidate_pending_for" do
    let(:guest_email) { "test@example.com" }
    let(:nutritionist) { create(:nutritionist) }
    let(:other_nutritionist) { create(:nutritionist) }
    let!(:old_request) do
      create(:appointment_request, guest_email: guest_email, status: "pending",
             nutritionist: nutritionist, service: create(:service, nutritionist: nutritionist))
    end
    let!(:other_nutritionist_request) do
      create(:appointment_request, guest_email: guest_email, status: "pending",
             nutritionist: other_nutritionist, service: create(:service, nutritionist: other_nutritionist))
    end

    it "rejects existing pending requests for the same guest and nutritionist" do
      AppointmentRequest.invalidate_pending_for(guest_email, nutritionist_id: nutritionist.id)
      expect(old_request.reload.status).to eq("rejected")
      expect(other_nutritionist_request.reload.status).to eq("pending")
    end

    it "preserves the excluded request" do
      new_req = create(:appointment_request, guest_email: guest_email, status: "accepted",
                       nutritionist: nutritionist, service: create(:service, nutritionist: nutritionist))
      AppointmentRequest.invalidate_pending_for(guest_email, nutritionist_id: nutritionist.id, except_id: new_req.id)
      expect(old_request.reload.status).to eq("rejected")
      expect(new_req.reload.status).to eq("accepted")
    end

    it "does not affect accepted requests" do
      accepted = create(:appointment_request, guest_email: guest_email, status: "accepted",
                        nutritionist: nutritionist, service: create(:service, nutritionist: nutritionist))
      AppointmentRequest.invalidate_pending_for(guest_email, nutritionist_id: nutritionist.id)
      expect(accepted.reload.status).to eq("accepted")
    end
  end

  describe "#accept!" do
    let(:nutritionist) { create(:nutritionist) }
    let(:service) { create(:service, nutritionist: nutritionist, duration_minutes: 60) }
    let!(:request) { create(:appointment_request, nutritionist: nutritionist, service: service, status: "pending") }

    it "marks request as accepted" do
      request.accept!
      expect(request.reload.status).to eq("accepted")
    end

    it "auto-rejects overlapping pending requests for the same nutritionist" do
      overlap = create(:appointment_request,
        nutritionist: nutritionist,
        service: service,
        status: "pending",
        requested_at: request.requested_at + 30.minutes
      )
      request.accept!
      expect(overlap.reload.status).to eq("rejected")
    end

    it "does NOT reject non-overlapping requests" do
      far_future = create(:appointment_request,
        nutritionist: nutritionist,
        service: service,
        status: "pending",
        requested_at: request.requested_at + 5.hours
      )
      request.accept!
      expect(far_future.reload.status).to eq("pending")
    end
  end

  describe "#reject!" do
    it "marks request as rejected" do
      req = create(:appointment_request, status: "pending")
      req.reject!
      expect(req.reload.status).to eq("rejected")
    end
  end
end
