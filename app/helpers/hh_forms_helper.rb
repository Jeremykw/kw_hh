module HhFormsHelper
	
	def field_has_data(title, field, pregnant)
		if field_data_is_true(field) && title_should_be_shown(title, pregnant)
			

			if title == "pregnant" && !pregnant || title == "pregnant_due_date" && !pregnant
				return false
			end

			true			
		end
	end

	def field_data_is_true(data)
		if data != false && data != "0" && data != "" && data != nil
			true
		end
	end

	def title_should_be_shown(title, pregnant)

		if title != "id" && title != "created_at" && title != "updated_at"
			true
		end
	end

	# def is_pregnant(hhform)
	# 	if hhform[:pregnant] == true
	# 		true
	# 	end
	# end

end