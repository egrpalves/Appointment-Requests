Rails.application.routes.draw do
  root "pages#search"
  get "/dashboard", to: "pages#nutritionist_dashboard"

  namespace :api do
    resources :nutritionists, only: [ :index ]
    resources :appointment_requests, only: [ :index, :create, :update ]
  end

  get "up" => "rails/health#check", as: :rails_health_check
end
