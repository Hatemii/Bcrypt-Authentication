module SessionsHelper

    # Login
    def log_in
        user = User
        .find_by(email: params["user"]["email"])
        .authenticate(params["user"]["password"])

        if user
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
    @current_user ||= User.find_by(id: session[:user_id])
  end

  # Check if user is logged_in
  def check_if_logged_in
     if current_user
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
