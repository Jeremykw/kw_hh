class HhFormsController < ApplicationController
	
	skip_before_action :verify_authenticity_token
	
	def new
		@hhform ||= HhForm.new(hhform_params)
	end

	def create
		@hhform = HhForm.new(hhform_params)
		if @hhform.save
			redirect_to hh_form_path(hhform)
		else
			flash[:notice] = @hhform.errors		
			@hhform = reduce_params(@hhform)
			render :new
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

	def reduce_params(hhform)
		param = Hash.new
		hhform.attributes.each do |field, data|
			unless data == "" or data == nil || data == false
				param < {field => data}
			end
		end
		HhForm.new(param)
	end
end
