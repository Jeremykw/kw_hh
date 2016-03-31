var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.hhState = function(lastState, action){

	this.contactForm	= Object.create(kwMassageHealthHistory.formPrototype);
	this.complaintsForm	= Object.create(kwMassageHealthHistory.formPrototype);
	this.checkboxesForm	= Object.create(kwMassageHealthHistory.formPrototype);
	this.painsForm		= Object.create(kwMassageHealthHistory.formPrototype);
	this.otherForm		= Object.create(kwMassageHealthHistory.formPrototype);
	this.concentForm	= Object.create(kwMassageHealthHistory.formPrototype);


	this.lastPage = pastPage(lastState, action);
	this.currentPage = thisPage(lastState, action);

	// this.isStateValid = checkStateValidity(this, lastState, action);

	// function checkStateValidity(state, lastState, action){
	// 	if ( action.action === "init" ){
	// 		return true;
	// 	}else{
	// 		switch ( state.lastPage ){
	// 			case 0:
	// 				return form.contact.isValid;					
	// 			default:
	// 				return true;
	// 		}
	// 	}
	// }

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