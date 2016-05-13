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
		form_section << ["first_name", hhform[:first_name]] if hhform[:first_name] != ""
		form_section << ["last_name", hhform[:last_name]] if hhform[:last_name] != ""
		form_section << ["address_1", hhform[:address_1]] if hhform[:address_1] != ""
		form_section << ["address_2", hhform[:address_2]] if hhform[:address_2] != ""
		form_section << ["city", hhform[:city]] if hhform[:city] != ""
		form_section << ["provance", hhform[:provance]] if hhform[:provance] != ""
		form_section << ["postal_code", hhform[:postal_code]] if hhform[:postal_code] != ""
		form_section << ["email", hhform[:email]] if hhform[:email] != ""
		form_section << ["phone",  number_to_phone(hhform[:phone])] if hhform[:phone] != ""
		form_section << ["occupation", hhform[:occupation]] if hhform[:occupation] != ""
		form_section << ["referral_source", hhform[:referral_source]] if hhform[:referral_source] != ""
		form_section << ["physician", hhform[:physician]] if hhform[:physician] != ""
		form_section << ["physician_address", hhform[:physician_address]] if hhform[:physician_address] != ""
		form_section << ["date_of_birth", hhform[:date_of_birth]] if hhform[:date_of_birth] != ""
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
		form_section = []
		pregnant = hhform[:pregnant]
		loss_of_sensation = hhform[:loss_of_sensation]
		allergies = hhform[:allergies]
		skin_condition = hhform[:infectious_skin_condition]
		diabetes = hhform[:diabetes]
		
		form_section << ["Chronic Cough", hhform[:chronic_cough]] if hhform[:chronic_cough]
		form_section << ["Shortness of Breath", hhform[:shortness_of_breath]] if hhform[:shortness_of_breath]
		form_section << ["Bronchitis", hhform[:bronchitis]] if hhform[:bronchitis]
		form_section << ["Asthma", hhform[:asthma]] if hhform[:asthma]
		form_section << ["Emphysema", hhform[:emphysema]] if hhform[:emphysema]
		form_section << ["High Blood Presure", hhform[:high_bp]] if hhform[:high_bp]
		form_section << ["Low  Blood Presure", hhform[:low_bp]] if hhform[:low_bp]
		form_section << ["CCHF", hhform[:cchf]] if hhform[:cchf]
		form_section << ["Heat Attack", hhform[:heat_attack]] if hhform[:heat_attack]
		form_section << ["Phlebitis", hhform[:phlebitis]] if hhform[:phlebitis]
		form_section << ["Stroke or CVA", hhform[:stroke_CVA]] if hhform[:stroke_CVA]
		form_section << ["Pacemaker", hhform[:pacemaker]] if hhform[:pacemaker]
		form_section << ["Heart Disease", hhform[:heart_disease]] if hhform[:heart_disease]
		form_section << ["Epilepsy", hhform[:epilepsy]] if hhform[:epilepsy]
		form_section << ["Cancer", hhform[:cancer]] if hhform[:cancer]
		form_section << ["Arthritis", hhform[:arthritis]] if hhform[:arthritis]
		form_section << ["Digestive Conditions", hhform[:digestive_conditions]] if hhform[:digestive_conditions]
		form_section << ["Osteoporosis", hhform[:osteoporosis]] if hhform[:osteoporosis]
		form_section << ["Vision Problems", hhform[:vision_problems]] if hhform[:vision_problems]
		form_section << ["Vision Loss", hhform[:vision_loss]] if hhform[:vision_loss]
		form_section << ["Ear Problems", hhform[:ear_problems]] if hhform[:ear_problems]
		form_section << ["Hearing Loss", hhform[:hearing_loss]] if hhform[:hearing_loss]
		form_section << ["Hepatitis", hhform[:hepatitis]] if hhform[:hepatitis]
		form_section << ["TB", hhform[:tb]] if hhform[:tb]
		form_section << ["HIV", hhform[:hiv]] if hhform[:hiv]
		form_section << ["Skin Condition: ", hhform[:skin_condition]] if skin_condition
		form_section << ["Loss of Sensation: ", hhform[:loss_of_sensation_description]] if loss_of_sensation
		form_section << ["Allergies: ", hhform[:allergies_description]] if allergies
		form_section << ["Diabetes: ", hhform[:diabetes_onset]] if diabetes
		form_section << ["Pregnant: ", hhform[:pregnant_due_date]] if pregnant
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