var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.painsForm = {

	errors: function(form){
		return kwMassageHealthHistory.validate.mergeObjects(
			kwMassageHealthHistory.validate.validateLengthOf([
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
			kwMassageHealthHistory.validate.validateBoolean([
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
