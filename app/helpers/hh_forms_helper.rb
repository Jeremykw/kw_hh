module HhFormsHelper
	###
	# => calls methods that filters out feilds that should 
	# displayed in form section based on action parameter
	###
	def hh_form_fields(hhform, action) 
		case action
		when :personal_info
			personal_info(hhform)
		when :complaint
			complaint(hhform)
		when :conditions
			conditions(hhform)
		when :hns
			hns(hhform)
		end
	end
	###
	# => returns an array of fields that fit into specifyed
	# section, excluding fields that are empty
	###
	def personal_info(hhform)
		form_section = []
		preg = hhform[:pregnant]
		hhform.attributes.each do |field, data|
			if field_has_data(field, data, preg) && title_should_be_shown(field, preg)
				if field == "phone"
					form_section << [field, number_to_phone(data)]
				else
					form_section << [field, data]
				end
			end
			break if field == "date_of_birth"
		end
		form_section
	end
	def complaint(hhform)
		form_section = []
		form_section <<  ["Primary Complaint: ",  hhform[:primary_complaint]] if hhform[:primary_complaint] != ""
		form_section <<  ["Secondary Complaint: ", hhform[:secondary_complaint]] if hhform[:secondary_complaint] != ""
		form_section <<  ["Previous Massage Note: ", hhform[:previous_massage_note]] if hhform[:previous_massage_note] != ""
		form_section <<  ["Sports: ", hhform[:sports]] if hhform[:sports] != ""
		form_section <<  ["Smokes Cigarettes", ""] if hhform[:smoke] == true
		# form_section << 
	end
	def conditions(hhform)
		count = 0
		form_section = []
		hhform.attributes.each do |field, data|
			if count > 15 && count < 55 && field_has_data(field, data, hhform[:pregnant])
				if field == "diabetes_onset"
					form_section << [field, data] if hhform[:diabetes] == true
				else	
					form_section << [field, data]
				end
			end
		count += 1
		end
		form_section
	end
	def hns(hhform)
		form_section = []
		form_section << ["Neck: ", div_word_wrap(hhform[:neck_note], 40)] if hhform[:neck]
	end
	###
	# => set of methods that help determin if
	# a field has data and should be displayed
	###
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

	def div_word_wrap(text, width)
		count = 0
		spot = 0
		text.split("").each do |letter|
			if count == width
				text.insert(spot, raw("\b\r"))
				count = 0
			else
				count += 1
			end
			spot += 1
		end
		text
	end
end