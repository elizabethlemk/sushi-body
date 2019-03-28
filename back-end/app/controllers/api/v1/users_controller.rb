class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_user!, only: [:update, :destroy]

  def profile
   render json: { user: UserSerializer.new(current_user) }, status: :accepted
 end

 def create
   @user = User.create(user_params)
   if @user.valid?
     @token = encode_token({ user_id: @user.id })
     render json: { user: UserSerializer.new(@user) , jwt: @token }, status: :created
   else
     render json: { error: 'failed to create user' }, status: :not_acceptable
   end
 end

  def update
    @user = User.find(params[:id])
    restaurants = @user.search_for_array_of_resturants(user_params["latitude"], user_params["longitude"])
    restaurants.map do |restaurant|
      restaurant
    end
    @user.update(user_params)
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def destroy
    @user.destroy
  end

# Private helper methods
  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :birthday, :location, :latitude, :longitude, :restaurants)
  end

  def set_user!
    @user = User.find(params[:id])
  end
end
