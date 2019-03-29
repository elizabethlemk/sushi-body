class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :sushi_guide, :user

  def user
    {user_id: self.object.user.id,
     user_name: self.object.user.username}
  end

  def sushi_guide
    {sushi_guide_id: self.object.sushi_guide.id,
     sushi_guide_name: self.object.sushi_guide.name}
  end

  belongs_to :user
  belongs_to :sushi_guide
end
