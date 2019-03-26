class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :location
      t.float :latitude
      t.float :longitude
      t.date :birthday
      t.string :username
      t.string :restaurants, array:true, default: []
      t.string :password_digest

      t.timestamps
    end
  end
end
