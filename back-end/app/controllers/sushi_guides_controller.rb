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
    params.permit(:english_name, :japanese_name, :type, :img)
  end
end
