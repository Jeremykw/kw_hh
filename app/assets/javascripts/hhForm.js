var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.formData = function(state, action, page){
	if ( action.action === "init" ){
		return {};
	}else if( state.currentPage === page ){
		return action.newFormData;
	}else{
		switch ( page ){
			case 0:
				return state.contactForm;
			case 1:
				return state.complaintsForm;
			case 2:
				return state.checkboxesForm;
			case 3:
				return state.painsForm;
			case 4:
				return state.otherForm;
			case 5:
				return state.concentForm;
		}
	}
}

kwMassageHealthHistory.createContactForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 0);
	this.isValid = valid(this.data);

	function valid(data){
		return true
	}


	// return (function(){
	// 	if ( action.action === "init" ){
	// 		return { isValid: true };
	// 	}else if ( state.currentPage === 0 ){
	// 		if ( action.newFormData ){
	// 			var form = action.newFormData;
	// 			form.errors = contactFormErrors(form);
	// 			form.isValid = kwMassageHealthHistory.validate.isFormValid(form.errors);
	// 		}
	// 		return form;
	// 	}else{
	// 		return state.contactForm;
	// 	}
	// })()
	// function contactFormErrors(form){
	// 	return kwMassageHealthHistory.validate.mergeErrors(
	// 		kwMassageHealthHistory.validate.validateLengthOf([
	// 				"first_name",
	// 				"last_name",
	// 				"address_1",
	// 				"address_2",
	// 				"city",
	// 				"provance",
	// 				"postal_code",
	// 				"email",
	// 				"phone",
	// 				"occupation",
	// 				"referral_source",
	// 				"physician",
	// 				"physician_address"
	// 			], 
	// 			50, form),
	// 		kwMassageHealthHistory.validate.validatePresenceOf(["first_name", "last_name", "email", "phone"], form)
	// 		)
	// }
}

kwMassageHealthHistory.createComplaintsForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 1);
	this.isValid = true;
	// return "createComplaintsFrom"
}

kwMassageHealthHistory.createCheckboxesForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 2);
	this.isValid = true;
}

kwMassageHealthHistory.createPainsForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 3);
	this.isValid = true;
}

kwMassageHealthHistory.createOtherForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 4);
	this.isValid = true;
}

kwMassageHealthHistory.createConcentForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 5);
	this.isValid = true;
}