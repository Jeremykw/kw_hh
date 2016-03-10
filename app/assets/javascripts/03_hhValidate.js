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
		var errorMessages = {};
		if (!form.hh_form_first_name){
			errorMessages["hh_form_first_name"] = "First Name Must Be Present";
		}
		if(!form.hh_form_last_name){
			errorMessages["hh_form_last_name"] = "Last Name Must Be Present";
		}
		if(!form.hh_form_email){
			errorMessages["hh_form_email"] = "Email Must Be Present";
		}
		if(!form.hh_form_phone){
			errorMessages["hh_form_phone"] = "Phone Must Be Present";
		}
		return errorMessages;
	}

	function validatePageOne(form){
		var errorMessages = {};
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


}