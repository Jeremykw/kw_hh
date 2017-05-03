Rails.application.routes.draw do
  devise_for :therapists
	get '/therapists/:id', to: 'therapists#show', as: 'therapists'
	
	resources :hh_forms do
	  member do
	    get :preview
	  end
	end
end
