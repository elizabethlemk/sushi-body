class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_name, :img_url, :address, :avg_rating, :user

  def user
    {user_id: self.object.user.id,
     user_name: self.object.user.username}
  end

  belongs_to :user
end
