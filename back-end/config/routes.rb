Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      # get '/current_user', to: 'auth#show'
      get '/profile', to: 'users#profile'
    end
  end

  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :bookmarks, only: [:index, :show, :create, :update, :destroy]
  resources :sushi_guides, only: [:index, :create]
end
