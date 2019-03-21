class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id
      t.string :restaurant_name
      t.string :img_url
      t.string :address

      t.timestamps
    end
  end
end
