class TherapistsController < ApplicationController
	before_action :authenticate_therapist!
	def show
		@forms = HhForms.find(current_user)
	end

end
