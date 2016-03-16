function hhForm(lastForm, action) {
	this.page = setPageNumber(action);
	this.formData = getFormData(lastForm, action) || {};

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

	function setPageNumber(action, isValid){
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