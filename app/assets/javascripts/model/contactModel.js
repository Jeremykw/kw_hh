var formModel = formModel || {};

formModel.contactForm = {

	domManipulation: function(){},
	
	errors: function(form){
		return formModel.validate.mergeObjects(
			formModel.validate.validateLengthOf([
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
			formModel.validate.validatePresenceOf([
				"first_name", 
				"last_name", 
				"email", 
				"phone"
			], form),
			formModel.validate.validatePhoneNumber(form),
			formModel.validate.validatePostalCode(form),
			formModel.validate.validateEmail(form),
			formModel.validate.validateDate("date_of_birth", form)
		)
	}

}