class HhFormsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def new
		@hhform = HhForm.new
	end

	def create
		@hhform = HhForm.new(hhform_params)
		if !@hhform[:confirm]
			render 'preview'
			return
		end
		hhform = HhForm.create(hhform_params)
		if hhform.invalid?
			render hh_form_path(hhform_params)
		else
			redirect_to hh_form_path(hhform)
		end
	end

	def show
		@hhform = HhForm.find(id_params)
	end

	def preview
		@hhform = HhForm.new(hhform_params)
	end
	###
	# Strong Parameters
	###

	def hhform_params
		if params[:hh_form]
			params.require(:hh_form).permit!
		end
	end
	def id_params
		if params[:id]
			params.require(:id)
		end
	end
end
