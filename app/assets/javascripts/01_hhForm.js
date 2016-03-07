function hhForm(lastForm, action) {
	this.page = setPageNumber(action);
	this.formData = getFormData(lastForm, action) || {};
	this.isValid = validation(this.page, this.formData);


	function validation(page, form){
		switch(page) {
	    case 0:
	        validatePageOne(form)
		}
	}

	function validatePageOne(form){
		return true;
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