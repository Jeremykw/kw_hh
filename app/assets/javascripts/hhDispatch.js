window.onload = init;
function init(){
	var isNewHhForm = document.getElementById("hh_form");
	if (isNewHhForm) {
		dispatch(null, {action: "init"}, getFullForm());

	};

};

function dispatch(currentForm, action, fullForm){
	var newForm = new hhForm(currentForm, action);
		debugger; 
	
	hhVisabilityFilter(newForm, fullForm);
};

function hhForm(lastForm, action) {
	this.page = setPageNumber(action);
	this.formData = (function(){if (lastForm){return getFormData(lastForm, action);}else{return {};}})()


	function getFormData(lastForm, action){
		var lastFormData = lastForm.formdata;
		var newFormData = action.newFormData

		var newForm =(function(){
			var formHash;
			if (lastFormData !== null){
				formHash = lastFormData;
				addNewFormToLast(formHash, newFormData)
			}else{
				formHash = newFormData;
				debugger
			}
			function addNewFormToLast(form, newData){
				for (var i in form){
					form.i = newData.i;
				}
				return form;
			}
			return formHash;
		})()
		return newForm;
	}

	function setPageNumber(action){
		var newPageNumber;
		if( action.action === "init" ){
			newPageNumber = 0;

		}else if( action.action === "next" ){
			newPageNumber = lastForm.page + 1;
		}else if( action.action == "back"){
			newPageNumber = lastForm.page -1;
		}
		return newPageNumber;
	}
}

function hhVisabilityFilter(hhForm, fullForm){

	(function(){
		var formPartials = document.getElementById("form_partials");
		while (formPartials.firstChild) { // remove all form fields
		    formPartials.removeChild(formPartials.firstChild);
		}

		(function(){
			var formSection = fullForm[hhForm.page]; // form section that needs to be shown
			var form = document.getElementById('form_partials'); // section to inserct section above
			form.appendChild(formSection); 
		    var buttonPlaceHolder = document.getElementById("put_button_here")
		    if ( buttonPlaceHolder.children.length < 1 ){		
				if ( hhForm.page === 0 ){
					addButton({action: "next"});				
				}else if ( hhForm.page === 5 ){
					addButton({action: "back"});
				}else {
					addButton({action: "back"});
					addButton({action: "next"});				
				}
			}
		})()
		document.getElementById("hh_form").scrollIntoView();
	})()

	function addButton(nextAction){

		var button = document.getElementById("put_button_here"); // this is where buttons go
	    var element = document.createElement("input"); // create button (type: input)
	    element.type = "button";
	    if ( nextAction.action === "back" ){
	    	element.setAttribute( 'value', 'Back');
	    }else if( nextAction.action === "next" ){
	    	element.setAttribute( 'value', 'Save and Contunue');
	    };
	    element.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    element.addEventListener('click', function(){
	   //
			nextAction["newFormData"] = (function(){
				var newDataHash = {};
				var formPartial = document.getElementById("form_partials");
				var formFields = formPartial.querySelectorAll('[id^="hh_form_"]');
				for (i = 0; i < formFields.length; i ++){
					newDataHash[formFields[i].id] = formFields[i].value; 
				}
				return newDataHash;
			})()
	   // 	
	    	dispatch(hhForm, nextAction, fullForm)
	    });
	    button.appendChild(element);
    	
	}

}


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
