class CreateSushiGuides < ActiveRecord::Migration[5.2]
  def change
    create_table :sushi_guides do |t|
      t.string :english_name
      t.string :japanese_name
      t.string :type

      t.timestamps
    end
  end
end
