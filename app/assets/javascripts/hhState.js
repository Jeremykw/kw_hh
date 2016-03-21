function hhState(state, action){
	this.lastPage = pastPage(state, action);
	this.currentPage = thisPage(state, action);
	// this.formData = createNewForm(this.lastPage, this.currentPage, action);
	this.contactForm = createContactForm(state, action);
	this.complaintsForm = createComplaintsFrom(state, action);
	this.checkboxesForm = createCheckboxesFrom(state, action);
	this.painsForm = createPainsFrom(state, action);
	this.otherForm = createOtherFrom(state, action);
	this.concentForm = createConcentFrom(state, action);
	// function createNewForm(lastPage, currentPage, action){
	// 	var newForm;
	// 	// var form = "hhForm" + state.currentPage.toString();
	// 	// newForm = new window[form](state, action);
	// 	// if ( action.action === "init" ){
	// 	// 	return {};
	// 	// }else {
	// 	// 	newForm = new hhForm(lastPage, action);
	// 	// 	return newForm;
	// 	// }

	// }

	function pastPage(){
		if ( action.action === "init" ){
			return 0;
		}else{
			return state.currentPage;
		}
	}

	function thisPage(state, action){
		if ( action.action === "init" ){
			return 0;
		}else if( action.action === "next" ){
			return state.currentPage + 1;
		}else if ( action.action === "back"){
			return state.currentPage - 1;
		}
	}
}
	// var newForm = new hhForm(currentForm, action);
	// if ( !validAction.isValid ){ 
	// 	newForm.page = currentForm.page;
	// 	newForm["errorMessages"] = validAction.errorMessages;

	// }