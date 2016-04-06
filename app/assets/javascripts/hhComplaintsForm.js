var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.complaintsForm = {

		errors: function(form){
		return kwMassageHealthHistory.validate.mergeErrors(
			kwMassageHealthHistory.validate.validateLengthOf([
				"primary_complaint",
				"secondary_complaint",
				"sports",
				"previous_massage_note",
				"smoke"
			], 50, form),
			kwMassageHealthHistory.validate.validatePresenceOf([
				"primary_complaint"
			], form)
		)
	}
}
