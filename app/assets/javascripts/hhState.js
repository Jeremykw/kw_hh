var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.hhState = function(lastState, action){
	var form = {
		contact: 	 kwMassageHealthHistory.createContactForm(lastState, action),
		complaints:  kwMassageHealthHistory.createComplaintsForm(lastState, action),
		checkboxes:  kwMassageHealthHistory.createCheckboxesForm(lastState, action),
		pains: 		 kwMassageHealthHistory.createPainsForm(lastState, action),
		other: 		 kwMassageHealthHistory.createOtherForm(lastState, action),
		concent: 	 kwMassageHealthHistory.createConcentForm(lastState, action),
	}

	this.contactForm	= form.contact;
	this.complaintsForm	= form.complaints;
	this.checkboxesForm	= form.checkboxes;
	this.painsForm	= form.pains;
	this.otherForm	= form.other;
	this.concentForm	= form.concent;


	this.lastPage = pastPage(lastState, action);
	this.currentPage = thisPage(lastState, action);

	this.isStateValid = checkStateValidity(this, lastState, action);

	function checkStateValidity(state, lastState, action){
		if ( action.action === "init" ){
			return true;
		}else{
			switch ( state.lastPage ){
				case 0:
					return form.contact.isValid;					
				default:
					return true;
			}
		}
	}

	// function falseIfAnyFormIsFlase(state){


	// 	// var contact 	= state.contactForm.isValid || true;
	// 	// var complaints 	= state.complaintsForm.isValid || true;
	// 	// var checkboxes 	= state.checkboxesForm.isValid || true;
	// 	// var pains 		= state.painsForm.isValid || true;
	// 	// var other 		= state.otherForm.isValid || true;
	// 	// var concent 	= state.concentForm.isValid || true;
	// 	// return ( contact && complaints && checkboxes && pains && other && concent );
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