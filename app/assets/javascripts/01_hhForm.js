function hhForm(lastForm, action) {
	this.page = setPageNumber(action);
	this.formData = getFormData(lastForm, action) || {};
	this.isValid = validate(lastForm.page, this.formData);

	function validate(page, form){
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
		var errorMessages = { valid: true };
		if (!form.hh_form_first_name){
			errorMessages["hh_form_first_name"] = "First Name Must Be Present";
			errorMessages["valid"] = false;
		}else if(!form.hh_form_last_name){
			errorMessages["hh_form_last_name"] = "Last Name Must Be Present";
			errorMessages["valid"] = false;
		}else if(!form.hh_form_email){
			errorMessages["hh_form_email"] = "Email Must Be Present";
			errorMessages["valid"] = false;
		}else if(!form.hh_form_phone){
			errorMessages["hh_form_phone"] = "Phone Must Be Present";
			errorMessages["valid"] = false;
		}
		return errorMessages;
	}

	function validatePageOne(form){
		var errorMessages = { valid: true };
		errorMessages["valid"] = true;
		return errorMessages;
	}
	function validatePageTwo(form){
		var errorMessages = { valid: true };
		errorMessages["valid"] = true;
		return errorMessages;
	}
	function validatePageThree(form){
		var errorMessages = { valid: true };
		errorMessages["valid"] = true;
		return errorMessages;
	}
	function validatePageFour(form){
		var errorMessages = { valid: true };
		errorMessages["valid"] = true;
		return errorMessages;
	}
	function validatePageFive(form){
		var errorMessages = { valid: true };
		errorMessages["valid"] = true;
		return errorMessages;
	}


	function getFormData(oldForm, action){
		var lastFormData = oldForm.formData
		
		var newFormData = action.newFormData
		var newForm =(function(){
			var formHash;
			formHash = lastFormData;
			for (var i in newFormData){
				// formHash[newFormData[i].key] = newFormData[i];
				formHash[i] = newFormData[i];
			}
			return formHash;
		})()
		return lastFormData;
	}

	function setPageNumber(action){
		var newPageNumber;
		if( action.action === "init" ){
			newPageNumber = 0;
		}else if( action.action === "next" ){
			newPageNumber = lastForm.page + 1;
		}else if( action.action == "back"){
			newPageNumber = lastForm.page -1;
		}
		return newPageNumber;
	}

}