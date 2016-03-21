function hhState(lastState, action){
	this.lastPage = pastPage(lastState, action);
	this.currentPage = thisPage(lastState, action);
	// this.formData = createNewForm(this.lastPage, this.currentPage, action);
	this.contactForm = createContactForm(lastState, action);
	this.complaintsForm = createComplaintsForm(lastState, action);
	this.checkboxesForm = createCheckboxesForm(lastState, action);
	this.painsForm = createPainsForm(lastState, action);
	this.otherForm = createOtherForm(lastState, action);
	this.concentForm = createConcentForm(lastState, action);

	function pastPage(){
		if ( action.action === "init" ){
			return 0;
		}else{
			return lastState.currentPage;
		}
	}

	function thisPage(lastState, action){
		if ( action.action === "init" ){
			return 0;
		}else if( action.action === "next" ){
			return lastState.currentPage + 1;
		}else if ( action.action === "back"){
			return lastState.currentPage - 1;
		}
	}
}
	// var newForm = new hhForm(currentForm, action);
	// if ( !validAction.isValid ){ 
	// 	newForm.page = currentForm.page;
	// 	newForm["errorMessages"] = validAction.errorMessages;

	// }