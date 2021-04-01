class UsersController < ApplicationController
    

    def new
        @user = User.new
    end

    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.create(user_params)

        if @user.valid?
            @user.save
            session[:user_id] = @user.id
            redirect_to root_path, flash.now[:notice] = "Registered Successfully"
        else
            flash.now[:notice] = "Something went wrong"
            redirect_to signup_path
        end
    end

    private
    def user_params
        params.require(:user).permit(:email,:password,:password_confirmation)
    end
end
 