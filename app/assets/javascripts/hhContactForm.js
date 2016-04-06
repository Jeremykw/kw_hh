var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.contactForm = {

	errors: function(form){
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



kwMassageHealthHistory.checkboxesForm = {

	errors: function(form){},
}

kwMassageHealthHistory.painsForm = {

	errors: function(form){},
}

kwMassageHealthHistory.otherForm = {

	errors: function(form){},
}

kwMassageHealthHistory.concentForm = {

	errors: function(form){},
}

// kwMassageHealthHistory.formData = function(state, action, page){
// 	if ( action.action === "init" ){
// 		return {};
// 	}else if( state.currentPage === page ){
// 		return action.newFormData || {};
// 	}else{
// 		switch ( page ){
// 			case 0:
// 				return state.contactForm.data;
// 			case 1:
// 				return state.complaintsForm.data;
// 			case 2:
// 				return state.checkboxesForm.data;
// 			case 3:
// 				return state.painsForm.data;
// 			case 4:
// 				return state.otherForm.data;
// 			case 5:
// 				return state.concentForm.data;
// 		}
// 	}
// }