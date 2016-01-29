class HhFormsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def new
		@hhform = HhForm.new
	end

	def create
		if HhForm.create(hhform_params).invalid?
			redirect_to hh_form_path(hhform_params)
		else
			redirect_to conformaton_path
		end
	end

	###
	# Strong Parameters
	###

	def hhform_params
		if params[:hhform]
			params.require(:hhform).permit!
		end
	end
end
