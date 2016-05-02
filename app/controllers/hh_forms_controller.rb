class HhFormsController < ApplicationController
	
	# skip_before_action :verify_authenticity_token
	protect_from_forgery except: :new
	def new
		@hhform = HhForm.new

		respond_to do |format|
			format.html
			format.js {render 'new.js.haml'}
		end
	end

	def update

	end

	def create

		respond_to do |format|
			@hhform = HhForm.new(hhform_params)
			
			format.html {
				# @hhform = HhForm.new(hhform_params)
				if @hhform.save
					redirect_to hh_form_path(@hhform)
				else
					flash[:notice] = @hhform.errors.full_messages	
					@hhform = HhForm.new(hhform_params)
					params[:hh_form] = []
					render :new
				end
			}
			format.json{
				# form = JSON.parse(hhform_params)
				if @hhform.save
					redirect_to hh_form_path(@hhform)
				else
					render :show
				end

				# @hhform = HhForm.new(hhform_params)
				# redirect_to hh_form_path(@hhform)

			}
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
		param
	end
end
