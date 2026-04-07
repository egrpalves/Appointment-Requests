require "rails_helper"

RSpec.describe AppointmentMailer, type: :mailer do
  let(:nutritionist) { create(:nutritionist, name: "Dr. Ana") }
  let(:service)      { create(:service, nutritionist: nutritionist) }

  describe "#request_answered – accepted" do
    let(:appointment) do
      create(:appointment_request,
        nutritionist: nutritionist, service: service,
        guest_name: "João Silva", guest_email: "joao@example.com",
        status: "accepted", requested_at: Time.zone.parse("2025-12-21 09:30")
      )
    end
    let(:mail) { AppointmentMailer.request_answered(appointment) }

    it "sends to the guest email" do
      expect(mail.to).to eq([ "joao@example.com" ])
    end

    it "has a confirmation subject" do
      expect(mail.text_part.body.decoded).to include("confirmed")
    end

    it "mentions the nutritionist name" do
      expect(mail.body.encoded).to include("Dr. Ana")
    end

    it "mentions the guest name" do
      expect(mail.text_part.body.encoded).to include("João Silva")
    end
  end

  describe "#request_answered – rejected" do
    let(:appointment) do
      create(:appointment_request,
        nutritionist: nutritionist, service: service,
        guest_name: "Maria Costa", guest_email: "maria@example.com",
        status: "rejected", requested_at: Time.zone.parse("2025-12-22 11:00")
      )
    end
    let(:mail) { AppointmentMailer.request_answered(appointment) }

    it "sends to the guest email" do
      expect(mail.to).to eq([ "maria@example.com" ])
    end

    it "subject does NOT say confirmed" do
      expect(mail.subject).not_to include("confirmed")
    end

    it "body mentions declined/rejected" do
      expect(mail.body.encoded).to match(/declined/i)
    end
  end
end
