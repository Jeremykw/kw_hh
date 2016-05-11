var formModel = formModel || {};

formModel.complaintsForm = {

	errors: function(form){
		return formModel.validate.mergeObjects(
			formModel.validate.validateLengthOf([
				"primary_complaint",
				"secondary_complaint",
				"sports",
				"previous_massage_note"
			], 500, form),
			formModel.validate.validatePresenceOf([
				"primary_complaint"
			], form),
			formModel.validate.validateBoolean([
				"smoke"
			], form)
		)
	}
}