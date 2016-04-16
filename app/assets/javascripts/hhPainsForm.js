var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.painsForm = {

	domManipulation: function(){
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_neck', 'hh_form_neck_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_low_back', 'hh_form_low_back_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_mid_back', 'hh_form_mid_back_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_upper_back', 'hh_form_upper_back_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_shoulders', 'hh_form_shoulders_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_arms', 'hh_form_arms_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_legs', 'hh_form_legs_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_knees', 'hh_form_knees_note');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_other', 'hh_form_other_note');
		
	},
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
