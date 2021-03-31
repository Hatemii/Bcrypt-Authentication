class UsersController < ApplicationController
    
    def new
        @user = User.new
    end

    def create
        @user = User.create(user_params)

        if @user.save
            session[:user_id] = @user.id
            redirect_to root_path,notice:"Signed Up Successfully"
        end
    end

    private
    def user_params
        params.require(:user).permit(:email,:password,:password_confirmation)
    end
end
 