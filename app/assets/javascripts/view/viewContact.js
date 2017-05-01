var formView = formView || {};

formView.contactForm = function(state){
	formView.render.form(state);
	formView.render.focusForm('hh_form_first_name');
};