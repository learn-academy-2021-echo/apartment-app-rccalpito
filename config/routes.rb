Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  root 'home#index'
end
