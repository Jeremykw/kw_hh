Rails.application.routes.draw do
  devise_for :users
	resources :hh_forms do
	  member do
	    get :preview
	  end
	end
end
