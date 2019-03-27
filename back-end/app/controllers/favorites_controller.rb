class FavoritesController < ApplicationController
  skip_before_action :authorized
  def index
    @favorites = Favorite.all
    render json: @favorites
  end

  def create
    @favorite = Favorite.create(fav_params)
    byebug
    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
  end

  private

  def fav_params
    params.require(:favorite).permit(:user_id, :sushi_id)
  end
end
