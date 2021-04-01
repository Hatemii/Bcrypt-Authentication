class UsersController < ApplicationController
    protect_from_forgery with: :null_session

    def new
        @user = User.new
        render json: @user
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = User.create(user_params)

        if @user.valid?
            @user.save
            session[:user_id] = @user.id
            render json: @user
        else
            render json: @user.errors
        end
    end

    def edit
        @user = User.find(params[:id])
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)

        if @user.update(user_params)
            render json: @user
        else
            render json: @user.errors
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy

        render json: "Deleted Successfully"
    end


    private

    def user_params
        params.require(:user).permit(:email,:password,:password_confirmation)
    end

end
 