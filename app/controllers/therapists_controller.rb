class TherapistsController < ApplicationController
	before_action :authenticate_therapist!
	def show
		@therapist = current_therapist
	end

end
