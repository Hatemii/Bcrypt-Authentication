Rails.application.routes.draw do


  root to: 'pages#home'
  resources :users
  resources :jobs
  resources :sessions

  get "signup", to: "users#new", as: "signup"
  get "login", to: "sessions#new", as: "login"
  get "logout", to: "sessions#destroy", as: "logout"


end
