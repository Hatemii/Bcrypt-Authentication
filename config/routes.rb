Rails.application.routes.draw do

  root to: 'pages#home'
  resources :users
  resources :jobs
  resources :sessions

  post :login, to: "sessions#create"
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

end
