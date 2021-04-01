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
            redirect_to root_path, notice: "Registered Successfully"
        else
            redirect_to signup_path
        end
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)

        if @user.update(user_params)
            redirect_to root_path, notice: "Updated Successfully"
        end
    end

    private
    def user_params
        params.require(:user).permit(:email,:password,:password_confirmation)
    end
end
 