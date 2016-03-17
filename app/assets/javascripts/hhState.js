function hhState(state, action){
	this.lastPage = pastPage(state, action);
	this.currentPage = thisPage(state, action);
	this.formData = createNewForm(this.currentPage, this.lastPage, action);

	function createNewForm(page, lastPage, action){
		var newForm;
		var form = "hhForm" + page.toString();
		// newForm = new window[form](state, action);
		if ( lastPage === 0 && page === 0 ){
			return {};
		}else {
			var form = new hhForm(action, lastPage);
			return  form
		}
	}

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