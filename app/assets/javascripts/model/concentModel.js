var formModel = formModel || {};

formModel.concentForm = {

	errors: function(form, state){
		return formModel.validate.mergeObjects(
			formModel.validate.validateLengthOf([
					"confirm_name",
					"confirm_email"
				], 
				50, form),
			formModel.validate.validatePresenceOf([
				"confirm_name",
				"confirm_email"
			], form),
			formModel.validate.validateConfirmName(form, state),
			formModel.validate.validateConfirmEmail(form, state)

		)
	}
}