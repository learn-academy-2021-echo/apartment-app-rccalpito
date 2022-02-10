# Initial setup of routes
# Rails.application.routes.draw do
#   resources :apartments
#   devise_for :users
#   root 'home#index'
# end

# updated routes
Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end