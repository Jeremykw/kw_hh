var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.createContactForm = function(state, action){
	return (function(){
		if ( action.action === "init" ){
			return {};
		}else if ( state.currentPage === 0 ){
			if ( action.newFormData ){
				var form = action.newFormData;
				form.errors = contactFormErrors(form);
				form.isValid = kwMassageHealthHistory.validate.isFormValid(form.errors);
			}
			return form;
		}else{
			return state.contactForm;
		}
	})()
	function contactFormErrors(form){
		return kwMassageHealthHistory.validate.mergeErrors(
			kwMassageHealthHistory.validate.validateLengthOf([
					"first_name",
					"last_name",
					"address_1",
					"address_2",
					"city",
					"provance",
					"postal_code",
					"email",
					"phone",
					"occupation",
					"referral_source",
					"physician",
					"physician_address"
				], 
				50, form),
			kwMassageHealthHistory.validate.validatePresenceOf(["first_name", "last_name", "email", "phone"], form)
			)
	}
}

kwMassageHealthHistory.createComplaintsForm = function(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 1 ){
		return action.newFormData;
	}else{
		return state.complaintsForm;
	}
	// return "createComplaintsFrom"
}

kwMassageHealthHistory.createCheckboxesForm = function(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 2 ){
		return action.newFormData;
	}else{
		return state.checkboxesForm
	}
}

kwMassageHealthHistory.createPainsForm = function(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 3 ){
		return action.newFormData;
	}else{
		return state.painsForm
	}
}

kwMassageHealthHistory.createOtherForm = function(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 4 ){
		return action.newFormData;
	}else{
		return state.otherForm
	}
}

kwMassageHealthHistory.createConcentForm = function(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 5 ){
		return action.newFormData;
	}else{
		return state.concentForm
	}
}