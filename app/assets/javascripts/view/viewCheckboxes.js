var formView = formView || {};

formView.checkboxesForm = function(state){
	formView.render.form(state);
	formView.render.dateCheckboxToggle(state, 'hh_form_diabetes', 'diabetes_onset');
	formView.render.dateCheckboxToggle(state, 'hh_form_pregnant', 'pregnant_due_date');
};