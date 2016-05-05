var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.concentForm = {

	errors: function(form, state){
		return kwMassageHealthHistory.validate.mergeObjects(
			kwMassageHealthHistory.validate.validateLengthOf([
					"confirm_name",
					"confirm_email"
				], 
				50, form),
			kwMassageHealthHistory.validate.validatePresenceOf([
				"confirm_name",
				"confirm_email"
			], form),
			kwMassageHealthHistory.validate.validateConfirmName(form, state),
			kwMassageHealthHistory.validate.validateConfirmEmail(form, state)

		)
	}
}