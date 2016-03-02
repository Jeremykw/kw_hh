window.onload = init;
function init(){
	var isNewHhForm = document.getElementById("hh_form");
	if (isNewHhForm) {
		var HHFORM = new hhForm();
		dispatch(HHFORM, "init");

	};

};



function dispatch(form, action){
	var newForm;
	if (action === 'init'){
		newForm = form;
	}else{
		newForm = new hhForm(form.getState(action));
		debugger
		// this.state = this.newState;
	}
	return newForm.visabilityFilter();
};

function hhForm(newState) {
	this.state = {
		page: 0,
		formDate: [],
		fullForm: function(){
			var initFullForm = {
				concent: document.getElementById("concent"),
				complaints: document.getElementById("complaints"),
				checkboxes: document.getElementById("checkboxes"),
				pains: 		document.getElementById("pains"),
				other: 		document.getElementById("other"),
				concent: 	document.getElementById("concent")
			};
			return initFullForm;
		}
	};


	this.getState = function(action){
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
	};


	this.visabilityFilter = function(){
		if(this.state.page === 0){
			document.getElementById("complaints").remove();
			document.getElementById("checkboxes").remove();
			document.getElementById("concent").remove();
			document.getElementById("pains").remove();
			document.getElementById("other").remove();
			addNextButton();

		}else if(formState.page === 1){
			document.getElementById("contact").remove();
			var complaintsForm = fullForm.complaints;
			var form = document.getElementById('hh_form');
			form.appendChild(complaintsForm);
			this.addNextButton(formState, fullForm);	
			this.addBackButton(formState, fullForm);
		};

	};

	addNextButton = function(){

		var button = document.getElementById("put_contact_button_here")
	    var element = document.createElement("input");
	    element.type = "button";
	    element.setAttribute( 'value', 'Save and Contunue');
	    element.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    element.setAttribute('onclick', 'dispatch(this.state, "next")');
	    
	    button.appendChild(element);
	};

	this.addBackButton = function(formState, fullForm){

		var button = document.getElementById("put_contact_button_here")
	    var element = document.createElement("input");
	    element.type = "button";
	    element.setAttribute( 'value', 'Back');
	    element.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    element.setAttribute('onclick', 'dispatch(this, "Back")');
	    
	    button.appendChild(element);
	};


};


