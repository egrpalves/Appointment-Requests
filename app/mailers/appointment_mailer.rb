class AppointmentMailer < ApplicationMailer
  def request_answered(request)
    @request = request
    @nutritionist = request.nutritionist
    @guest_name = request.guest_name
    @status = request.status
    @requested_at = request.requested_at.strftime("%B %-d, %Y at %H:%M")

    subject = if @status == "accepted"
      "Your appointment has been confirmed - #{@nutritionist.name}"
    else
      "Your appointment request - #{@nutritionist.name}"
    end

    mail(to: @request.guest_email, subject: subject)
  end
end
