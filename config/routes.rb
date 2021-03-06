Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :guides, only: [:create, :index, :destroy, :show, :update]
    resources :steps
    resources :comments
    resources :photos
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
