class CreateSushiGuides < ActiveRecord::Migration[5.2]
  def change
    create_table :sushi_guides do |t|

      t.timestamps
    end
  end
end
