var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.hhState = function(lastState, action){

	this.contactForm	= new kwMassageHealthHistory.createContactForm(lastState, action);
	this.complaintsForm	= new kwMassageHealthHistory.createComplaintsForm(lastState, action);
	this.checkboxesForm	= new kwMassageHealthHistory.createCheckboxesForm(lastState, action);
	this.painsForm		= new kwMassageHealthHistory.createPainsForm(lastState, action);
	this.otherForm		= new kwMassageHealthHistory.createOtherForm(lastState, action);
	this.concentForm	= new kwMassageHealthHistory.createConcentForm(lastState, action);

	this.isStateValid = stateValid(this);

	this.lastPage = pastPage(lastState, action);
	this.currentPage = thisPage(lastState, action, this.stateIsValid);


	function stateValid(that){
		return kwMassageHealthHistory.validate.isFormValid(
			kwMassageHealthHistory.validate.mergeErrors(
				that.contactForm.errors,
				that.complaintsForm.errors,
				that.checkboxesForm.errors,
				that.painsForm.errors,
				that.otherForm.errors,
				that.concentForm.errors
			)
		)
	}

	function pastPage(){
		if ( action.action === "init" ){
			return 0;
		}else{
			return lastState.currentPage;
		}
	}

	function thisPage(lastState, action, stateIsValid){
		if ( action.action === "init" ){
			return 0;
		}else if( !stateIsValid ){
			return lastState.currentPage;
		}else if( action.action === "next" ){
			return lastState.currentPage + 1;
		}else if ( action.action === "back"){
			return lastState.currentPage - 1;
		}
	}
}