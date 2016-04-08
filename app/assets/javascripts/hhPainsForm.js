var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.painsForm = {

	errors: function(form){
		return kwMassageHealthHistory.validate.mergeErrors(
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
				50, form)
		)
	}
}
