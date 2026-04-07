class AddUniquePendingGuestEmailIndexToAppointmentRequests < ActiveRecord::Migration[8.1]
  def change
    add_index :appointment_requests, :guest_email,
      unique: true,
      where: "status = 'pending'",
      name: "index_appointment_requests_on_guest_email_pending"
  end
end
