class Api::V1::SushiGuidesController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @sushis = SushiGuide.all
    render json: @sushis
  end

  def create
    @sushi = SushiGuide.create(sushi_params)
  end

  private

  def sushi_params
    params.permit(:name, :english, :type_one, :img)
  end
end
