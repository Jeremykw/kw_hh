var formModel = formModel || {};

formModel.painsForm = {

	errors: function(form){
		return formModel.validate.mergeObjects(
			formModel.validate.validateLengthOf([
					"neck_note",
					"low_back_note",
					"mid_back_note",
					"upper_back_note",
					"shoulders_note",
					"arms_note",
					"legs_note",
					"knees_note",
					"other_note"
				], 
				500, form),
			formModel.validate.validateBoolean([
				"neck",
				"low_back",
				"mid_back",
				"upper_back",
				"shoulders",
				"arms",
				"legs",
				"knees",
				"other"
			], form)
		)
	}
}
