class UsersController < ApplicationController
  before_action :set_user!, only: [:update, :destroy]
  before_action :authorized, except: [:create]

  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash[:error] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user.update(user_params)
    if @user.valid?
      redirect_to edit_user_path
    else
      flash[:error] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    @user.destroy
    session.delete :user_id
    redirect_to '/'
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
