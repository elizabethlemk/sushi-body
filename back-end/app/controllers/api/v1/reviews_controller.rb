class Api::V1::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def create
    @review = Review.create(review_params)
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private

  def review_params
    params.permit(:rating, :review, :bookmark_id)
  end
end
