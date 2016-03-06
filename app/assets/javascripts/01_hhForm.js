function hhForm(lastForm, action) {
	this.page = setPageNumber(action);
	this.formData = getFormData(lastForm, action);


	function getFormData(lastForm, action){
		var lastFormData = (function(){
			if (!lastForm.formdata){
				return {};
			}else{
				return lastForm.formData;
			}
		})()
		
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

		return newForm;
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