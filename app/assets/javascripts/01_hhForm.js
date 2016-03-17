function hhForm(action, lastPage){
	this.form = function(action, lastPage){ 
		switch(lastPage) {
	    case 0:
	        return hhFormZero(action.newFormData);
	    case 1:
	        return hhFormOne(action.newFormData);
	    case 2:
	        return hhFormTwo(action.newFormData);
	    case 3:
	        return hhFormThree(action.newFormData);
	    case 4:
	        return hhFormFour(action.newFormData);
	    case 5:
	        return hhFormFive(action.newFormData);
	    default:
	    	return "Page Does Not Exist"
		}
	}()

}

function hhFormZero(data){
	return data;
}

function hhFormOne(){
	return "one"
}
// function hhForm(lastForm, action) {
// 	this.page = setPageNumber(action);
// 	this.formData = getFormData(lastForm, action) || {};

// 	function getFormData(oldForm, action){
// 		var lastFormData = oldForm.formData
		
// 		var newFormData = action.newFormData
// 		var newForm =(function(){
// 			var formHash;
// 			formHash = lastFormData;
// 			for (var i in newFormData){
// 				// formHash[newFormData[i].key] = newFormData[i];
// 				formHash[i] = newFormData[i];
// 			}
// 			return formHash;
// 		})()
// 		return lastFormData;
// 	}

// 	function setPageNumber(action, isValid){
// 		var newPageNumber;
// 		if( action.action === "init" ){
// 			newPageNumber = 0;
// 		}else if( action.action === "next" ){
// 			newPageNumber = lastForm.page + 1;
// 		}else if( action.action == "back"){
// 			newPageNumber = lastForm.page -1;
// 		}
// 		return newPageNumber;
// 	}

// }