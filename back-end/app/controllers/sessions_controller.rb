class SessionsController < ApplicationController

  def create
    user = User.find_by(user_name: params[:user_name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
    end
  end

  def destroy
    session.delete :user_id
  end
end
