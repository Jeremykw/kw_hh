Rails.application.routes.draw do
  devise_for :therapists
	resources :hh_forms do
	  member do
	    get :preview
	  end
	end
end
