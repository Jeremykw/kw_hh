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

function hhForm(lastForm, action) {
	this.page = setPageNumber(action);
	this.formData = (function(){
		if (lastForm){
			return getFormDate(lastForm);
		}else{
			return {};
		}
	})()


	function getFormDate(lastForm){
		var formData = {};
		var lastFormDate = lastForm.formdata;
		var newFormData = (function(){
			var newDataHash = {};
			var formPartial = document.getElementById("form_partials");
			var formFields = formPartial.querySelectorAll('[id^="hh_form_"]');
			for (i = 0; i < formFields.length; i ++){
				newDataHash[formFields[i].id] = formFields[i].value; 
			}
			return newDataHash;
		})()
		function(lastFormDate, newFormData){
		    for (var attrname in lastFormDate)  { formData[attrname] = lastFormDate[ attrname]; }
		    for (var attrname in newFormData) { formData[attrname] = newFormData[attrname]; }
		}()
		debugger
		return formData;
	}

	function setPageNumber(action){
		var newPageNumber;
		if( action === "init" ){
			newPageNumber = 0;

		}else if( action === "next" ){
			newPageNumber = lastForm.page + 1;
		}else if( action == "back"){
			newPageNumber = lastForm.page -1;
		}
		return newPageNumber;
	}
}
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
		    if ( buttonPlaceHolder.children.length < 1 ){		
				if ( hhForm.page === 0 ){
					addButton("next");				
				}else if ( hhForm.page === 5 ){
					addButton("back");
				}else {
					addButton("back");
					addButton("next");				
				}
			}
		})()
		document.getElementById("hh_form").scrollIntoView();
	})()

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

