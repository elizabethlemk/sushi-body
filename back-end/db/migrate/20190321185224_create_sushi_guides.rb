class CreateSushiGuides < ActiveRecord::Migration[5.2]
  def change
    create_table :sushi_guides do |t|
      t.string :type_one
      t.string :type_two
      t.string :name
      t.string :english
      t.string :kanji
      t.string :hiragana
      t.string :katakana
      t.string :img

      t.timestamps
    end
  end
end
