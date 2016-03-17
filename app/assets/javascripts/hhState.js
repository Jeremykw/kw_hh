function hhState(state, action){
	this.lastPage = pastPage(state, action);
	this.currentPage = thisPage(state, action)
	this.currentForm = {};
	this.newFormDate;

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
		}
	}
}
	// var newForm = new hhForm(currentForm, action);
	// if ( !validAction.isValid ){ 
	// 	newForm.page = currentForm.page;
	// 	newForm["errorMessages"] = validAction.errorMessages;

	// }