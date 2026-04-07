class CreateAppointmentRequests < ActiveRecord::Migration[8.1]
  def change
    create_table :appointment_requests do |t|
      t.references :nutritionist, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true
      t.string :guest_name, null: false
      t.string :guest_email, null: false
      t.datetime :requested_at, null: false
      t.string :status, null: false, default: "pending"
      t.timestamps
    end

    add_index :appointment_requests, :guest_email
    add_index :appointment_requests, :status
    add_index :appointment_requests, [ :nutritionist_id, :requested_at ]
  end
end
