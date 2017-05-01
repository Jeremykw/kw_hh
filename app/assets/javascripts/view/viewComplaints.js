var formView = formView || {};

formView.complaintsForm = function(state){
	formView.render.form(state);
	formView.render.focusForm('hh_form_primary_complaint');
};