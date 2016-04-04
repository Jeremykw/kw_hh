var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.hhState = function(lastState, action){

	this.contactForm	= new kwMassageHealthHistory.contactForm(lastState, action);
	this.complaintsForm	= new kwMassageHealthHistory.complaintsForm(lastState, action);
	this.checkboxesForm	= new kwMassageHealthHistory.checkboxesForm(lastState, action);
	this.painsForm		= new kwMassageHealthHistory.painsForm(lastState, action);
	this.otherForm		= new kwMassageHealthHistory.otherForm(lastState, action);
	this.concentForm	= new kwMassageHealthHistory.concentForm(lastState, action);

	this.errorMessages = errorMessages(this) || {};
	this.isStateValid = stateValid(this.errorMessages, action);

	this.lastPage = pastPage(lastState, action);
	this.currentPage = thisPage(lastState, action, this.isStateValid);

	function errorMessages(that){
		return kwMassageHealthHistory.validate.mergeErrors(
			that.contactForm.errors,
			that.complaintsForm.errors,
			that.checkboxesForm.errors,
			that.painsForm.errors,
			that.otherForm.errors,
			that.concentForm.errors
		)
	}

	function stateValid(errors, action){
		if ( action.action === "init" ){
			return true;
		}else{
			return kwMassageHealthHistory.validate.isFormValid(errors)
		}
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