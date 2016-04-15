var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.concentForm = {

	domManipulation: function(){
		
	},
	errors: function(form){
		return kwMassageHealthHistory.validate.mergeErrors(
			kwMassageHealthHistory.validate.validateLengthOf([
					"confirm_name",
					"confirm_email"
				], 
				50, form),
			kwMassageHealthHistory.validate.validatePresenceOf([
				"confirm_name",
				"confirm_email"
			], form),
			kwMassageHealthHistory.validate.validateConfirmName(form),
			kwMassageHealthHistory.validate.validateConfirmEmail(form)

		)
	}
}