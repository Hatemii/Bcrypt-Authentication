module SessionsHelper

    # Login
    def log_in
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


   # Returns the current logged-in user (if any)
  def current_user
    if session[:user_id]
        @current_user ||= User.find(session[:user_id])
    end
  end

  # Check if user is logged_in
  def check_if_logged_in
     if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
       render json: {
        logged_in: false
      }
    end
  end

  # Logs out the current user
  def log_out
    reset_session
     render json: {
        status:200,
        logged_out: true
      }
  end

end
