var formView = formView || {};

formView.painsForm = function(state){
	formView.render.form(state);
	
	formView.render.dateCheckboxToggle(state, 'hh_form_neck', 'neck_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_low_back', 'low_back_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_mid_back', 'mid_back_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_upper_back', 'upper_back_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_shoulders', 'shoulders_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_arms', 'arms_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_legs', 'legs_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_knees', 'knees_pain');
	formView.render.dateCheckboxToggle(state, 'hh_form_other', 'other_pain');
};