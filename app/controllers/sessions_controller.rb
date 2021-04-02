class SessionsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def create
    user = User
    .find_by(email: params["user"]["email"])
    .authenticate(params["user"]["password"])

    if user
      session[:user_id] = user.id
      render json:{
        status: :created,
        logged_in: true,
        user: user
      }
    else
      render json: {status: 401}
    end

  end
end
