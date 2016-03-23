var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.hhState = function(lastState, action){
	this.contactForm = kwMassageHealthHistory.createContactForm(lastState, action);
	this.complaintsForm = kwMassageHealthHistory.createComplaintsForm(lastState, action);
	this.checkboxesForm = kwMassageHealthHistory.createCheckboxesForm(lastState, action);
	this.painsForm = kwMassageHealthHistory.createPainsForm(lastState, action);
	this.otherForm = kwMassageHealthHistory.createOtherForm(lastState, action);
	this.concentForm = kwMassageHealthHistory.createConcentForm(lastState, action);

	this.isStateValid = checkStateValidity(this, lastState, action);

	this.lastPage = pastPage(lastState, action);
	this.currentPage = thisPage(lastState, action);

	function checkStateValidity(state, lastState, action){
		if ( action.action === "init" ){
			return true;
		}else{
			return lastState
		}
	}

	function anyFormIsFalse(state){
		return state;
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