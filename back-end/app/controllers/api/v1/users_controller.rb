class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]
  # before_action :set_user!, only: [:update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

 #  def profile
 #   render json: { user: UserSerializer.new(current_user) }, status: :accepted
 # end

 def create
   @user = User.create(user_params)
   # if @user.valid?
   #   @token = encode_token({ user_id: @user.id })
   #   render json: { user: UserSerializer.new(@user).as_json , jwt: @token }, status: :created
   #   #
   # else
   #   render json: { error: 'failed to create user' }, status: :not_acceptable
   # end
  render json: @user
 end

  def update
    @user.update(user_params)
  end

  def destroy
    @user.destroy
    session.delete :user_id
  end

# Private helper methods
  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :birthday, :location, :latitude, :longitude)
  end

  def set_user!
    @user = User.find(params[:id])
  end
end
