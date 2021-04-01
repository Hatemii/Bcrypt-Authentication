class ApplicationController < ActionController::Base
    protect_from_forgery

    private

    def current_user
       @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    helper_method :logged_in?, :current_user


    def logged_in?
        !!current_user
      end

    def authorize
        redirect_to login_path unless logged_in?
    end

end
