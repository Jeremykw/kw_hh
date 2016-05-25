var formView = formView || {};

formView.concentForm = function(state){
	formView.render.form(state);
	formView.render.focusForm('hh_form_confirm_name');
};