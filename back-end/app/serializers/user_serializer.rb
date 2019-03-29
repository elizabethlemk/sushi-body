class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :location, :birthday, :username
  has_many :favorites
  has_many :bookmarks
  has_many :reviews, through: :bookmarks
end
