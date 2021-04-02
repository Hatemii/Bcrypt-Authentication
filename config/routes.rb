Rails.application.routes.draw do

  root to: 'pages#home'
  resources :users
  resources :jobs
  resources :sessions, only: [:create]

  post "/login", to: "sessions#create"

end
