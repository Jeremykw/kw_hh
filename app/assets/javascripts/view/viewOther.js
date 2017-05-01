var formView = formView || {};

formView.otherForm = function(state){
	formView.render.form(state);
	formView.render.focusForm('hh_form_current_medications');
};