window.onload = (function(){
	
	var HhForm = {

		init: function(){
			this.fullForm = this.getFullForm;
			this.state = {
				page: 0,
				formDate: []
			};
			this.nextAction = 'init';
			this.visabilityFilter(this.state, this.fullForm)
		},

		visabilityFilter: function(currentState, fullForm){
			if(currentState.page === 0){
				
				document.getElementById("complaints").remove();
				document.getElementById("checkboxes").remove();
				document.getElementById("concent").remove();
				document.getElementById("pains").remove();
				document.getElementById("other").remove();
				this.addButton(currentState, 'next', fullForm);

			}else if(currentState.page === 1){
				document.getElementById("contact").remove();
				document.getElementById("complaints").add();
			};

		},

		getFullForm: {
				concent: document.getElementById("concent"),
				complaints: document.getElementById("complaints"),
				checkboxes: document.getElementById("checkboxes"),
				pains: 		document.getElementById("pains"),
				other: 		document.getElementById("other"),
				concent: 	document.getElementById("concent")
		},


		addButton: function(state, action, fullForm){
			var button = document.getElementById("put_contact_button_here")
		    var element = document.createElement("input");
		    element.type = "button";
		    element.setAttribute( 'value', 'Save and Contunue');
		    element.setAttribute('class', "btn btn-danger topmargin-sm");
		    element.setAttribute('onclick', '(this.state, action, this.fullForm)');
		    // debugger

		    button.appendChild(element);

		},


	}
	HhForm.init();
});


// function initHhForm(){
// 	var isNewHhForm = document.getElementById("hh_form");
// 	if (isNewHhForm) {
// 		var fullForm = getFullForm();
// 		var state = initState();
// 		var action = 'init';
// 		dispatch(state, action, fullForm);

// 	};





// 		function dispatch (state, action, fullForm){
// 			var newState;
// 			if (action === 'init'){
// 				newState = state
// 			}else{
// 				newState = getState(state, action)
// 			}
// 			return visabilityFilter(newState, fullForm)
// 			// switch(state){
// 			// 	case 'init':
// 			// 		visabilityFilter.init()
// 			// 		break
// 			// 	case 'forware':
// 			// 		//
// 			// 		break
// 			// 	case 'back':
// 			// 		//
// 			// 		break
// 			// 	default:
// 		};


// 		function getState(currentState, action){
// 			var newState = new Object;
// 			if(currentState.page === []){
// 					// removed init state
// 				}else{
// 					newState.page = currentState.page + 1;
// 					newState.formData = [];
// 			};
// 			return newState;

// 		};



// 		function initState(){
// 			var initialState = {
// 				page: 0,
// 				formData: []
// 			};
// 			return initialState;
// 		};

// };