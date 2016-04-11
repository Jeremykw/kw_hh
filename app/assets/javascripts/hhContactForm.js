var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.contactForm = {

	errors: function(form){
		return kwMassageHealthHistory.validate.mergeErrors(
			kwMassageHealthHistory.validate.validateLengthOf([
					"first_name",
					"last_name",
					"address_1",
					"address_2",
					"city",
					"provance",
					"postal_code",
					"email",
					"phone",
					"occupation",
					"referral_source",
					"physician",
					"physician_address"
				], 
				50, form),
			kwMassageHealthHistory.validate.validatePresenceOf([
				"first_name", 
				"last_name", 
				"email", 
				"phone"
			], form),
			kwMassageHealthHistory.validate.validatePhoneNumber(form)
		)
	}

}