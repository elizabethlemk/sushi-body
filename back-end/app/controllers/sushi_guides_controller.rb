class SushiGuidesController < ApplicationController

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
