require "rails_helper"

RSpec.describe AppointmentRequests::AcceptRequest, type: :model do
  let(:nutritionist) { create(:nutritionist) }
  let(:service) { create(:service, nutritionist: nutritionist, duration_minutes: 60) }
  let!(:request) { create(:appointment_request, nutritionist: nutritionist, service: service, status: "pending") }

  it "accepts the request and rejects overlapping pending requests" do
    overlap = create(
      :appointment_request,
      nutritionist: nutritionist,
      service: service,
      status: "pending",
      requested_at: request.requested_at + 30.minutes
    )

    described_class.new(request).call

    expect(request.reload.status).to eq("accepted")
    expect(overlap.reload.status).to eq("rejected")
  end

  it "rejects pending requests that overlap before the accepted request" do
    earlier_overlap = create(
      :appointment_request,
      nutritionist: nutritionist,
      service: service,
      status: "pending",
      requested_at: request.requested_at - 30.minutes
    )

    described_class.new(request).call

    expect(earlier_overlap.reload.status).to eq("rejected")
  end

  it "does not reject non-overlapping pending requests" do
    far_future = create(
      :appointment_request,
      nutritionist: nutritionist,
      service: service,
      status: "pending",
      requested_at: request.requested_at + 5.hours
    )

    described_class.new(request).call

    expect(far_future.reload.status).to eq("pending")
  end
end
