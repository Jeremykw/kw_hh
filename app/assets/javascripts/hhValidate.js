function actionValidation(hhForm, action){
	this.errorMessages = errorMessageList(hhForm.page, action.newFormData);
	this.isValid = validate(this.errorMessages);

	
	function validate(errorMessages){
		if ( action.action === "init"){
			return true;
		}else if (Object.keys(errorMessages).length > 0 ){
			return false;
		}else {
			return true;
		}
	}

	function errorMessageList(page, form){
		switch(page) {
	    case 0:
	        return validatePageZero(form);
	    case 1:
	        return validatePageOne(form);
	    case 2:
	        return validatePageTwo(form);
	    case 3:
	        return validatePageThree(form);
	    case 4:
	        return validatePageFour(form);
	    case 5:
	        return validatePageFive(form);
	    default:
	    	return "Page Does Not Exist"
		}
	}

	function validatePageZero(form){
		return mergeErrors(
			validateLengthOf([
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
				25, form),
			validatePresenceOf(["first_name", "last_name", "email", "phone"], form)
			)
	}
	function validatePageOne(form){
		return mergeErrors(
			validateLengthOf(["primary_complaint"], 25, form),
			validatePresenceOf(["primary_complaint", "secondary_complaint"], form)
			)
	}
	function validatePageTwo(form){
		var errorMessages = {};
		return errorMessages;
	}
	function validatePageThree(form){
		var errorMessages = {};
		return errorMessages;
	}
	function validatePageFour(form){
		var errorMessages = {};
		return errorMessages;
	}
	function validatePageFive(form){
		var errorMessages = {};
		return errorMessages;
	}

	function validatePresenceOf(fieldsArray, form){
		var presanceErrors = {};
		for (var field in fieldsArray) {
			var testField = "hh_form_" + fieldsArray[field];
			if ( !form[testField] ){
				presanceErrors["hh_form_" + fieldsArray[field]] = 
					fieldsArray[field].replace(/_/g, ' ').toLowerCase().capitalize() + 
					" Must Be Present";
			}
		}
		return presanceErrors;
	}
	
	function validateLengthOf(fieldsArray, maxLength, form){
		var lengthErrors = {};
		for (var field in fieldsArray) {
			var testField = "hh_form_" + fieldsArray[field];
			if ( form[testField].length > 25 ){
				lengthErrors["hh_form_" + fieldsArray[field]] = 
					fieldsArray[field].replace(/_/g, ' ') + // capitalization needs to be fixed
					" must be less than " + maxLength + 
					" characters";
			}
		}
		return lengthErrors;
	}

	function mergeErrors(){
		var errors = {};
		for ( i = 0; i < arguments.length; i ++){
			for ( errorr in arguments[i]){
				errors[errorr] = arguments[i][errorr];
			}
		}
		return errors;
	}

	String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
    };
}