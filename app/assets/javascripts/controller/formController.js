var formController = formController || {};

formController.init = function(first_argument) {

	formModel.currentState = new formModel.baseState();
	formView.fullForm = new formView.baseFullForm();
	formView[formController.page(formModel.currentState.currentPage)](formModel.currentState);

}

formController.update = function(action){
	var state = formModel.currentState;
	state.update(action);
	var currentPage = formController.page(state.currentPage);
	if ( state.isValid ){
		formView[currentPage](state);
	}else{
		formView.render.errors(state);
	}

}