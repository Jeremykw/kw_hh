var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.formData = function(state, action, page){
	if ( action.action === "init" ){
		return {};
	}else if( state.currentPage === page ){
		return action.newFormData || {};
	}else{
		switch ( page ){
			case 0:
				return state.contactForm.data;
			case 1:
				return state.complaintsForm.data;
			case 2:
				return state.checkboxesForm.data;
			case 3:
				return state.painsForm.data;
			case 4:
				return state.otherForm.data;
			case 5:
				return state.concentForm.data;
		}
	}
}

kwMassageHealthHistory.contactForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 0);
	this.errors = formErrors(this.data) || {}; 
	this.isValid = kwMassageHealthHistory.validate.isFormValid(this.errors);

	function formErrors(form){
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
			kwMassageHealthHistory.validate.validatePresenceOf([
				"first_name", 
				"last_name", 
				"email", 
				"phone"
			], form)
		)
	}

}

kwMassageHealthHistory.complaintsForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 1);
	this.errors = {};
	this.isValid = true;
}

kwMassageHealthHistory.checkboxesForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 2);
	this.errors = {};
	this.isValid = true;
}

kwMassageHealthHistory.painsForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 3);
	this.errors = {};
	this.isValid = true;
}

kwMassageHealthHistory.otherForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 4);
	this.errors = {};
	this.isValid = true;
}

kwMassageHealthHistory.concentForm = function(state, action){
	this.data = kwMassageHealthHistory.formData(state, action, 5);
	this.errors = {};
	this.isValid = true;
}