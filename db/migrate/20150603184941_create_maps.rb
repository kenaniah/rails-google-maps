class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :name
      t.text :address

      t.timestamps null: false
    end
  end
end
