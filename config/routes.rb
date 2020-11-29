Rails.application.routes.draw do
  resources :countries

  namespace :api do 
    namespace :v1 do 
      resources :countries
    end 
  end 
end
