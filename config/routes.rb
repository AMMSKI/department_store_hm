Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "departments#index"
  
  resources :departments do
    resources :items
  end

  # get '/departments', to: 'departments#index'
  # get '/departments/new', to: 'departments#new'
  # get '/departments/:id', to: 'departments#show'
  # get '/departments/:id/edit', to: 'departments#edit'


  # get '/departments/:department_id/items', to: 'items#index'
  # get '/departments/:department_id/items/new', to: 'items#new'
  # get '/departments/:department_id/items/:id', to: 'items#show'
  # post '/departments/:department_id/items/', to: 'items#create'

  # post '/departments', to: 'departments#create'
  # patch '/departments/:id', to: 'departments#update'
  # delete '/departments/:id', to: 'departments#destroy'

end
