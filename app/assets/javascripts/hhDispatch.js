window.onload = init;
function init(){
	var isNewHhForm = document.getElementById("hh_form");
	if (isNewHhForm) {
		dispatch(null, "init", getFullForm());

	};

};

function dispatch(currentForm, action, fullForm){
	var newForm = new hhForm(currentForm, action);
	hhVisabilityFilter(newForm, fullForm);
};

function getFullForm(){
	var initFullForm = {
		0: document.getElementById("contact"),
		1: document.getElementById("complaints"),
		2: document.getElementById("checkboxes"),
		3: document.getElementById("pains"),
		4: document.getElementById("other"),
		5: document.getElementById("concent")
	};
	(function(){
		var array = [0, 1, 2, 3, 4, 5]
		var form = document.getElementById("form_partials");
		array.forEach(function(f) {
		    form.removeChild(initFullForm[f]);
		});
	});
	return initFullForm;
};

function hhForm(oldForm, action) {
	this.page = setPageNumber(action);
	this.formDate = [];

	function setPageNumber(action){
		var newPageNumber;
		if( action === "init" ){
			newPageNumber = 0;

		}else if( action === "next" ){
			newPageNumber = oldForm.page + 1;
		}else if( action == "back"){
			newPageNumber = oldForm.page -1;
		};
		return newPageNumber;
	};
};
function hhVisabilityFilter(hhForm, fullForm){

	(function(){
		var formPartials = document.getElementById("form_partials");
		while (formPartials.firstChild) {
		    formPartials.removeChild(formPartials.firstChild);
		}

		(function(){
			var formSection = fullForm[hhForm.page];
			var form = document.getElementById('form_partials');
			form.appendChild(formSection);
		    var buttonPlaceHolder = document.getElementById("put_button_here")
		    if ( buttonPlaceHolder.hasChildNodes ){		
				if ( hhForm.page === 0 ){
					addButton("next");				
				}else if ( hhForm.page === 5 ){
					addButton("back");
				}else {
					addButton("back");
					addButton("next");				
				};
			};
		})();

	})();

	function addButton(nextAction){

		var button = document.getElementById("put_button_here")
	    var element = document.createElement("input");
	    element.type = "button";
	    if ( nextAction === "back" ){
	    	element.setAttribute( 'value', 'Back');
	    }else if( nextAction === "next" ){
	    	element.setAttribute( 'value', 'Save and Contunue');
	    };
	    element.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    element.addEventListener('click', function(){dispatch(hhForm, nextAction, fullForm)});
	    button.appendChild(element);
    	
	};

};

