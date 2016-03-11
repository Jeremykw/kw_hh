function hhVisabilityFilter(hhForm, fullForm){



	(function newFormSection(){
		// remove all form fields
		emptyFormSection("form_partials");
		

		// add form section corresponding to page number
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
		if ( hhForm.errorMessages ){
			addErrorMessagesToForm()
		}
		document.getElementById("hh_form").scrollIntoView();
	})()

	function addErrorMessagesToForm(){
		emptyFormSection("hh_error_message_place_holder")
		var errorPlaceHolder = document.getElementById("hh_error_message_place_holder");
		var p = document.createElement("p");
		p.setAttribute( "class", "t600 color center" )		
		var br = document.createElement("br")
		var i = 1;
		for ( e in hhForm.errorMessages ){
			var seperation;
			if ( Object.keys(hhForm.errorMessages).length > 1 ){
				seperation = " | ";
			}else{
				seperation = "";
			}
			if ( i === Object.keys(hhForm.errorMessages).length ){ seperation = ""};
			
			var error = document.createTextNode(hhForm.errorMessages[e] + seperation );
			p.appendChild(error);
			i++;
		}
		errorPlaceHolder.appendChild(p);
	}

	function emptyFormSection(section){
		var formPartials = document.getElementById(section);
		while (formPartials.firstChild) { 
		    formPartials.removeChild(formPartials.firstChild);
		}
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
