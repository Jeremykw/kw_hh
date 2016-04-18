var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.painsForm = {

	domManipulation: function(){
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_neck', 'neck_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_low_back', 'low_back_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_mid_back', 'mid_back_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_upper_back', 'upper_back_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_shoulders', 'shoulders_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_arms', 'arms_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_legs', 'legs_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_knees', 'knees_pain');
		kwMassageHealthHistory.hhRender.dateCheckboxToggle('hh_form_other', 'other_pain');
		
	},
	errors: function(form){
		return kwMassageHealthHistory.validate.mergeErrors(
			// kwMassageHealthHistory.validate.validateLengthOf([
			// 		"neck_note",
			// 		"low_back_note",
			// 		"mid_back_note",
			// 		"upper_back_note",
			// 		"shoulders_note",
			// 		"arms_note",
			// 		"legs_note",
			// 		"knees_note",
			// 		"other_note"
			// 	], 
			// 	500, form),
			// kwMassageHealthHistory.validate.validateBoolean([
			// 	"neck",
			// 	"low_back",
			// 	"mid_back",
			// 	"upper_back",
			// 	"shoulders",
			// 	"arms",
			// 	"legs",
			// 	"knees",
			// 	"other"
			// ], form)
		)
	}
}
