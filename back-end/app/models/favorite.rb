class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :sushi_guide
end
