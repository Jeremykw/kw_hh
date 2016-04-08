var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.checkboxesForm = {

	errors: function(form){
		return kwMassageHealthHistory.validate.mergeErrors(
			kwMassageHealthHistory.validate.validateLengthOf([
					"skin_condition",
					"loss_of_sensation",
					"allergies"
				], 
				500, form)
		)
	}
}
