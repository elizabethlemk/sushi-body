class BookmarksController < ApplicationController
  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end

  def show
    @bookmark = Book.find(params[:id])
    render json: @bookmark
  end

  def create
    @bookmark = Bookmark.create(bookmark_params)
  end

  def update
    @bookmark = Book.find(params[:id])
    @bookmark.update(bookmark_params)
  end

  def destroy
    @bookmark = Book.find(params[:id])
    @bookmark.destroy
  end

  private

  def bookmark_params
    params.permit(:user_id, :restaurant_name, :img_url, :address, :avg_rating)
  end
end
