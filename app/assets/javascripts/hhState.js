var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.hhState = function(lastState, action){

	this.contactForm	= new kwMassageHealthHistory.createContactForm(lastState, action);
	this.complaintsForm	= new kwMassageHealthHistory.createComplaintsForm(lastState, action);
	this.checkboxesForm	= new kwMassageHealthHistory.createCheckboxesForm(lastState, action);
	this.painsForm		= new kwMassageHealthHistory.createPainsForm(lastState, action);
	this.otherForm		= new kwMassageHealthHistory.createOtherForm(lastState, action);
	this.concentForm	= new kwMassageHealthHistory.createConcentForm(lastState, action);


	this.lastPage = pastPage(lastState, action);
	this.currentPage = thisPage(lastState, action);

	this.isStateValid = checkStateValidity(this, lastState, action);

	function checkStateValidity(state, lastState, action){
		if ( action.action === "init" ){
			return true;
		}
		// else{
		// 	switch ( state.lastPage ){
		// 		case 0:
		// 			return form.contact.isValid;					
		// 		default:
		// 			return true;
		// 	}
		// }
	}

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