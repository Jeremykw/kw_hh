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
		var errorMessages = validatePresenceOf(["first_name", "last_name", "email", "phone"], form);
		return errorMessages;
	}

	function validatePageOne(form){
		var errorMessages = validatePresenceOf(["primary_complaint"], form);
		if (form.hh_form_primary_complaint.length > 25){
			errorMessages["hh_form_primary_complaint"] = "Primary Complaint feild Should be less than 25 Characters";
		}
		return errorMessages;
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
				presanceErrors["hh_form_" + fieldsArray[field]] = fieldsArray[field].replace(/_/g, ' ').toLowerCase().capitalize() + " Must Be Present";
			}
		}
		return presanceErrors;
	}
	
	String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
    };
}