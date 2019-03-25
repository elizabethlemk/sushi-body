class Api::V1::UsersController < ApplicationController
  before_action :set_user!, only: [:update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
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
    params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :birthday, :location)
  end

  def set_user!
    @user = User.find(params[:id])
  end
end
