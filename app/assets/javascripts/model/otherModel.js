var formModel = formModel || {};

formModel.otherForm = {

	errors: function(form){
		return formModel.validate.mergeObjects(
			formModel.validate.validateLengthOf([
					"current_medications",
					"surgery",
					"general_health_status",
					"other_healthcare_list",
					"injuries",
					"mental_condition_note",
					"other_medical_conditions",
					"special_notes"
				], 
				500, form)
		)
	}
}