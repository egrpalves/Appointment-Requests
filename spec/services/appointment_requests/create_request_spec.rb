require "rails_helper"

RSpec.describe AppointmentRequests::CreateRequest, type: :model do
  let(:nutritionist) { create(:nutritionist) }
  let(:service) { create(:service, nutritionist: nutritionist) }
  let(:attributes) do
    {
      nutritionist: nutritionist,
      service: service,
      guest_name: "Test guest",
      guest_email: "guest@example.com",
      requested_at: 2.days.from_now
    }
  end

  it "creates a pending appointment request and rejects previous pending requests" do
    old_request = create(
      :appointment_request,
      nutritionist: nutritionist,
      service: service,
      guest_email: "guest@example.com",
      status: "pending"
    )

    result = described_class.new(attributes).call

    expect(result).to be_persisted
    expect(result.status).to eq("pending")
    expect(old_request.reload.status).to eq("rejected")
  end

  it "does NOT reject pending requests for OTHER nutritionists" do
    other_nutritionist = create(:nutritionist)
    other_request = create(
      :appointment_request,
      nutritionist: other_nutritionist,
      service: create(:service, nutritionist: other_nutritionist),
      guest_email: "guest@example.com",
      status: "pending"
    )

    result = described_class.new(attributes).call

    expect(result).to be_persisted
    expect(other_request.reload.status).to eq("pending")
  end
end
