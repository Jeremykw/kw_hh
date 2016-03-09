function hhVisabilityFilter(hhForm, fullForm){

	newFormSection();

	function newFormSection(){
		// remove all form fields
		var formPartials = document.getElementById("form_partials");
		while (formPartials.firstChild) { 
		    formPartials.removeChild(formPartials.firstChild);
		}

		// add form section corresponding to page number
		(function(){
			var formSection = fullForm[hhForm.page]; // form section that needs to be shown
			var form = document.getElementById('form_partials'); // section to insert section above
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
			// if (!hhForm.isValid.valid){
			// 	addErrorMessages(hhForm, formSection)
			// }
		})()
		document.getElementById("hh_form").scrollIntoView();
	}

	// function addErrorMessages(hhForm){
	// 	var errorPlaceHolder = document.getElementById("put_error_messages_here");
	// 	var message = document.createTextNode("eatMe")
	// 	// for( i = 0; i< hhForm.isValid.length; i++ ){
	// 	// 	errorPlaceHolder.createTextNode(hhForm.isValid[i])
	// 	// }
	// 	errorPlaceHolder.appendChild(message)

	}

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
	   		// gets form data
			nextAction["newFormData"] = (function(){
				var newDataHash = {};
				var formPartial = document.getElementById("form_partials");
				var formFields = formPartial.querySelectorAll('[id^="hh_form_"]');
				for (i  = 0; i < formFields.length; i ++ ){
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
