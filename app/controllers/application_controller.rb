class ApplicationController < ActionController::Base
    protect_from_forgery 

    def current_user
       @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    # authroize method redirects user to login page if not logged in
    # def authorize
    #   redirect_to "/l", alert: 'You must be logged in to access this page.' if current_user.nil?
    # end

end
