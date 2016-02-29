window.onload = initHhForm;
function initHhForm(){
	var isNewHhForm = document.getElementById("hh_form");
	if (isNewHhForm) {
		var fullForm = hhForm.getFullForm();
		var state = hhForm.initState();
		var action = 'init';
		hhForm.dispatch(state, action, fullForm);

	};

};

var hhForm = {
	dispatch: function(state, action, fullForm){
		var newState;
		if (action !== 'init'){
			newState = this.getState(state, action)
		}else{
			newState = state
		}
		return this.visabilityFilter(newState, fullForm)
		// switch(state){
		// 	case 'init':
		// 		visabilityFilter.init()
		// 		break
		// 	case 'forware':
		// 		//
		// 		break
		// 	case 'back':
		// 		//
		// 		break
		// 	default:
	},


	getState: function(currentState, action){
		var newState = new Object;
		if(currentState.page === []){
				// removed init state
			}else{
				newState.page = currentState.page + 1;
				newState.formData = [];
		};
		return newState;

	},

	visabilityFilter: function(currentState, fullForm){
		if(currentState.page === 0){
			document.getElementById("complaints").remove();
			document.getElementById("checkboxes").remove();
			document.getElementById("concent").remove();
			document.getElementById("pains").remove();
			document.getElementById("other").remove();
			this.addButton('next');

		}else if(currentState.page === 1){
			document.getElementById("contact").remove();
			document.getElementById("complaints").add();
		};

	},

	addButton: function(state, action, fullForm){
		var button = document.getElementById("put_contact_button_here")
	    var element = document.createElement("input");
	    element.type = "button";
	    element.setAttribute( 'value', 'Save and Contunue');
	    element.setAttribute('class', "btn btn-danger topmargin-sm");
	    element.setAttribute('onclick', 'hhForm.dispatch(state, action, fullForm)');
	    // debugger

	    button.appendChild(element);

	},

	getFullForm: function(){
		var initFullForm = {
			concent: document.getElementById("concent"),
			complaints: document.getElementById("complaints"),
			checkboxes: document.getElementById("checkboxes"),
			pains: 		document.getElementById("pains"),
			other: 		document.getElementById("other"),
			concent: 	document.getElementById("concent")
		};
		return initFullForm;
	},

	initState: function(){
		var initialState = {
			page: 0,
			formData: []
		};
		return initialState;
	},

};