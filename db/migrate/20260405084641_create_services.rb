class CreateServices < ActiveRecord::Migration[8.1]
  def change
    create_table :services do |t|
      t.references :nutritionist, null: false, foreign_key: true
      t.string :name, null: false
      t.decimal :price, null: false, precision: 10, scale: 2
      t.string :location, null: false
      t.integer :duration_minutes, null: false, default: 60
      t.float :lat
      t.float :lng
      t.timestamps
    end

    add_index :services, :name
    add_index :services, :location
  end
end
