module HhFormsHelper
	###
	# => Filters out feilds that should not be displayed in show
	###
	
	def hh_form_fields(hhform, action)
		if action == "personal_info"
			personal_info(hhform)
		end
	end

	def personal_info(hhform)
		form_section = []
		preg = hhform[:pregnant]
		hhform.attributes.each do |field, data|
			if field_has_data(field, data, preg) && title_should_be_shown(field, preg)
				form_section << [field, data]
			end
			break if field == "date_of_birth"
		end
		form_section
	end














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
	### end field_had_data
end