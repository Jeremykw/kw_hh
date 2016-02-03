Rails.application.routes.draw do
	resources :hh_forms do
	  member do
	    get 'preview'
	  end
	end
end
