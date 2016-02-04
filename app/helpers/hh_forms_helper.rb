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
		when :medications_surgeries_general_other
			medications_surgeries_general_other(hhform)
		when :injuries_mental_other_special
			injuries_mental_other_special(hhform)
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
		return_form_unless_nil(form_section)
	end
	def complaint(hhform)
		form_section = []
		form_section <<  ["Primary Complaint: ",  hhform[:primary_complaint]] if hhform[:primary_complaint] != ""
		form_section <<  ["Secondary Complaint: ", hhform[:secondary_complaint]] if hhform[:secondary_complaint] != ""
		form_section <<  ["Previous Massage Note: ", hhform[:previous_massage_note]] if hhform[:previous_massage_note] != ""
		form_section <<  ["Sports: ", hhform[:sports]] if hhform[:sports] != ""
		form_section <<  ["Smokes Cigarettes", ""] if hhform[:smoke] == true
		return_form_unless_nil(form_section) 
	end
	def conditions(hhform)
		count = 0
		form_section = []
		hhform.attributes.each do |field, data|
			if count > 15 && count < 54 && field_has_data(field, data, hhform[:pregnant])
				unless field == "diabetes_onset"	
					form_section << [field, data]
				end
			end
		count += 1
		end
		return_form_unless_nil(form_section)
	end
	def hns(hhform)
		form_section = []
		form_section << ["Neck: ", hhform[:neck_note]] if hhform[:neck]
		form_section << ["Low Back: ", hhform[:low_back_note]] if hhform[:low_back]
		form_section << ["Mid Back: ", hhform[:mid_back_note]] if hhform[:mid_back]
		form_section << ["Upper Back: ", hhform[:upper_back_note]] if hhform[:upper_back]
		form_section << ["Shoulders: ", hhform[:shoulders_note]] if hhform[:shoulders]
		form_section << ["Arms: ", hhform[:arms_note]] if hhform[:arms]
		form_section << ["Legs: ", hhform[:legs_note]] if hhform[:legs]
		form_section << ["Knees: ", hhform[:knees_note]] if hhform[:knees]
		form_section << ["Other: ", hhform[:other_note]] if hhform[:other]
		return_form_unless_nil(form_section)
	end
	def medications_surgeries_general_other(hhform)
		form_section = []
		form_section << ["Current Medications: ", hhform[:current_medications]] if field_data_is_true(hhform[:current_medications])
		form_section << ["Surgery: ", hhform[:surgery]] if field_data_is_true(hhform[:surgery])
		form_section << ["General Health Status: ", hhform[:general_health_status]] if field_data_is_true(hhform[:general_health_status])
		form_section << ["Other Healthcare List: ", hhform[:other_healthcare_list]] if field_data_is_true(hhform[:other_healthcare_list])
		return_form_unless_nil(form_section)
	end
	def injuries_mental_other_special(hhform)
		form_section = []
		form_section << ["Injuries: ", hhform[:injuries]] if field_data_is_true(hhform[:injuries])
		form_section << ["Mental Condition: ", hhform[:mental_condition_note]] if field_data_is_true(hhform[:mental_condition_note])
		form_section << ["Other Medical Conditions: ", hhform[:other_medical_conditions]] if field_data_is_true(hhform[:other_medical_conditions])
		form_section << ["Special Notes: ", hhform[:special_notes]] if field_data_is_true(hhform[:special_notes])
		return_form_unless_nil(form_section)
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
		else
			false
		end
	end
	def title_should_be_shown(title, pregnant)

		if title != "id" && title != "created_at" && title != "updated_at"
			true
		end
	end
	### end field_had_data

	def return_form_unless_nil(form)
		if form == []
			return nil
		else
			return form
		end
	end
end