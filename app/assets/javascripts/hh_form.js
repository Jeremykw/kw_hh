window.onload = init;
function init(){
	var isNewHhForm = document.getElementById("hh_form");
	if (isNewHhForm) {
		this.fullForm = getFullForm();
		this.formState = hhForm.init();
		this.formAction = 'init';
		hhDispatch(this.formState, this.formAction);

	};

};

function hhDispatch(formState, formAction){
	var newState;
	if (formAction === 'init'){
		newState = formState;
	
	}else{

		newState = hhForm.getState(formState, formAction);
	debugger

		// this.state = this.newState;
	}
	
	return hhForm.visabilityFilter(newState, fullForm);
		

};




var hhForm = {

	init: function(){
		var initialState = {
			page: 0,
			formData: []
		};
		return initialState;

	},

	getState: function(formState, formAction){

		if( formAction === 'next' ){
			formState = {
				page: formState.page + 1,
				formData: []
			}

		}else if( formAction === 'back' ){
			formState = {
				page: formState.page - 1,
				formData: []

			}
			
		};

		return formState;

	},

	visabilityFilter: function(formState, fullForm){
		if(formState.page === 0){
			document.getElementById("complaints").remove();
			document.getElementById("checkboxes").remove();
			document.getElementById("concent").remove();
			document.getElementById("pains").remove();
			document.getElementById("other").remove();
			this.addNextButton(formState, fullForm);

		}else if(formState.page === 1){
			document.getElementById("contact").remove();
			var complaintsForm = fullForm.complaints;
			var form = document.getElementById('hh_form');
			form.appendChild(complaintsForm);
			this.addNextButton(formState, fullForm);	
			this.addBackButton(formState, fullForm);
		};

	},

	addNextButton: function(formState, fullForm){

		var button = document.getElementById("put_contact_button_here")
	    var element = document.createElement("input");
	    element.type = "button";
	    element.setAttribute( 'value', 'Save and Contunue');
	    element.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    element.setAttribute('onclick', 'hhDispatch(formState, "next")');
	    
	    button.appendChild(element);
	},

	addBackButton: function(formState, fullForm){

		var button = document.getElementById("put_contact_button_here")
	    var element = document.createElement("input");
	    element.type = "button";
	    element.setAttribute( 'value', 'Back');
	    element.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    element.setAttribute('onclick', 'hhDispatch(formState, "Back")');
	    
	    button.appendChild(element);
	},

};


function getFullForm() {
	var f = {
	concent: document.getElementById("concent"),
	complaints: document.getElementById("complaints"),
	checkboxes: document.getElementById("checkboxes"),
	pains: 		document.getElementById("pains"),
	other: 		document.getElementById("other"),
	concent: 	document.getElementById("concent")
	};
	return f;	
};