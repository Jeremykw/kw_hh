window.onload = init;
function init(){
	var isNewPage = document.getElementById("contact");
	if (isNewPage) {
		hhForm();
	};
};

function hhForm(){
	var state = getState(state);
	visabilityFilter(state);

	function getState(state){
		if(typeof state === 'undefined'){
			var state = {
				page: 0,	
				form: []
			};
			return state;
		};
	};

	function visabilityFilter(state){
		if(state.page === 0){
			document.getElementById("complaints").remove();
			document.getElementById("checkboxes").remove();
			document.getElementById("concent").remove();
			document.getElementById("other").remove();
			document.getElementById("pains").remove();

		};

	};
};