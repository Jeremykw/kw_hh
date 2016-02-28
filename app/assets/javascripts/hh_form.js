window.onload = init;
function init(){
	var isNewPage = document.getElementById("contact");
	if (isNewPage) {
		hhForm(null, null, getFullForm());

	};
	function getFullForm(){
		complaints: document.getElementById("concent");
		complaints: document.getElementById("complaints");
		checkboxes: document.getElementById("checkboxes");
		pains: document.getElementById("pains");
		other: document.getElementById("other");
		concent: document.getElementById("concent");
	};
};

function hhForm(currentState, action, fullForm){
	var state = getState(currentState, fullForm);
	visabilityFilter(state, null, fullForm);
	return state;
	// debugger
	function getState(currentState, form){
		var newState = new Object;
		newState.fullForm = form;
		if(currentState === null){
				newState.page = 0;
				newState.formData =  [];
			}else{
				newState.page = currentState.page + 1;
				newState.formData = [];
		};
		return newState;

	};

	function visabilityFilter(currentState, action, fullForm){
		if(currentState.page === 0){
			document.getElementById("complaints").remove();
			document.getElementById("checkboxes").remove();
			document.getElementById("concent").remove();
			document.getElementById("pains").remove();
			document.getElementById("other").remove();
			addButton(currentState, action, fullForm);

		}else if(currentState.page === 1){
			document.getElementById("contact").remove();
			document.getElementById("complaints").add();
		};

	};

	function addButton(state, action, fullForm){
		var button = document.getElementById("put_contact_button_here")
	    var element = document.createElement("input");
	    element.type = "button";
	    element.setAttribute( 'value', 'Save and Contunue');
	    element.setAttribute('class', "btn btn-danger topmargin-sm");
	    element.setAttribute('onclick', 'hhForm(state, null, fullForm)');
	    // debugger

	    button.appendChild(element)

	};
};