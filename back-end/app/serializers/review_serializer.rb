class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user, :review, :bookmark

  def user
    {user_id: self.object.bookmark.user.id,
     user_name: self.object.bookmark.user.username}
  end

  def bookmark
    {restaurant_name: self.object.bookmark.restaurant_name,
      address: self.object.bookmark.address
    }
  end


  belongs_to :bookmark
  belongs_to :user, through: :bookmark
end
