var formView = formView || {};

formView.checkboxesForm = function(state){
	formView.render.form(state);
	formView.render.dateCheckboxToggle(state, 'hh_form_diabetes', 'diabetes_onset');
	formView.render.dateCheckboxToggle(state, 'hh_form_pregnant', 'pregnant_due_date');
	formView.render.dateCheckboxToggle(state, 'hh_form_loss_of_sensation', 'loss_of_sensation_description');
	formView.render.dateCheckboxToggle(state, 'hh_form_allergies', 'allergies_description');
	formView.render.dateCheckboxToggle(state, 'hh_form_infectious_skin_condition', 'skin_conditions_description');
};