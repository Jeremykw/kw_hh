function createContactForm(state, action){
	if ( action.action === "init" ){
		return {};
	}else if ( state.currentPage === 0 ){
		return action.newFormData
	}else{
		return state.contactForm;
	}
}

function createComplaintsForm(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 1 ){
		return action.newFormData;
	}else{
		return state.complaintsForm;
	}
	// return "createComplaintsFrom"
}

function createCheckboxesForm(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 2 ){
		return action.newFormData;
	}else{
		return state.checkboxesForm
	}
}

function createPainsForm(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 3 ){
		return action.newFormData;
	}else{
		return state.painsForm
	}
}

function createOtherForm(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 4 ){
		return action.newFormData;
	}else{
		return state.otherForm
	}
}

function createConcentForm(state, action){
	if ( action.action  === "init" ){
		return {};
	}else if (state.currentPage === 5 ){
		return action.newFormData;
	}else{
		return state.concentForm
	}
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