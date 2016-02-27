window.onload = init;
function init(){
	var isNewPage = document.getElementById("contact");
	if (isNewPage) {
		hhForm();
	};
};

function hhForm(currentState, action){
	var state = getState(currentState);
	visabilityFilter(state);
	// debugger
	function getState(currentState){
		var newState = new Object
		if(typeof currentState === 'undefined'){
				newState.page = 0;
				newState.formInfo =  [];
				addButton(newState);
			}else{
				newState.page = currentState.page + 1;
				newState.formInfo = [];
				addButton(newState);
		};
		return newState;

	};

	function visabilityFilter(currentState){
		if(currentState.page === 0){
			document.getElementById("complaints").remove();
			document.getElementById("checkboxes").remove();
			document.getElementById("concent").remove();
			document.getElementById("pains").remove();
			document.getElementById("other").remove();

		}else if(currentState.page === 1){
			document.getElementById("contact").remove();
			document.getElementById("checkboxes").remove();
			document.getElementById("concent").remove();
			document.getElementById("pains").remove();
			document.getElementById("other").remove();
		};

	};

	function addButton(state){
		
	    var element = document.createElement("button");
	    element.type = "button";
	    element.class = "btn btn-danger";
	    element.value = "Save and Contunue";
	    element.name = "button";
	    element.onclick = "hhForm(state, 1)";
	    debugger
	    document.getElementById("contact").appendChild(element);

	};
};