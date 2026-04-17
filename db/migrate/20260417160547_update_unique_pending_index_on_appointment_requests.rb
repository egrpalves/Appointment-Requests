class UpdateUniquePendingIndexOnAppointmentRequests < ActiveRecord::Migration[8.1]
  def change
    remove_index :appointment_requests, name: "index_appointment_requests_on_guest_email_pending"

    add_index :appointment_requests, [ :guest_email, :nutritionist_id ],
      unique: true,
      where: "status = 'pending'",
      name: "index_appointment_requests_on_guest_email_nutritionist_pending"
  end
end
