class CreateNutritionists < ActiveRecord::Migration[8.1]
  def change
    create_table :nutritionists do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :specialty
      t.text :bio
      t.string :photo_url
      t.timestamps
    end

    add_index :nutritionists, :email, unique: true
    add_index :nutritionists, :name
  end
end
