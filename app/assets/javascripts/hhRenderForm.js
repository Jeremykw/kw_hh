function hhRenderForm(state, fullForm){


	if ( state.lastPage !== state.currentPage ){
		renderNewForm(state, fullForm);
	}else if( state.lastPage === 0 && state.currentPage === 0 ){
		renderNewForm(state, fullForm);
	}else{
		addErrorMessagesToForm(state);
	}

	document.getElementById("hh_form").scrollIntoView();

	function renderNewForm(state, fullForm){
		emptyFormSection("form_partials");
		// add form section corresponding to state number
		var formSection = fullForm[state.currentPage]; // form section that needs to be shown
		var form = document.getElementById('form_partials'); // section to insert section above
		form.appendChild(formSection); 
	    var buttonPlaceHolder = document.getElementById("put_button_here");
	    if ( buttonPlaceHolder.children.length < 1 ){		
			if ( state.currentPage === 0 ){
				addButton(state, "next", fullForm);				
			}else if ( state.currentPage === 5 ){
				addButton(state, "back", fullForm);
			}else {
				addButton(state, "back", fullForm);
				addButton(state, "next", fullForm);				
			}
		}
	}

	function addButton(state, action, fullForm){
		var nextAction = {};
		nextAction.action = action;
		var buttonPlaceHolder = document.getElementById("put_button_here"); // this is where buttons go
	    var button = document.createElement("input"); // create button (type: input)
	    button.type = "button";
	    if ( action === "back" ){
	    	button.setAttribute( 'value', 'Back');
	    }else if( action === "next" ){
	    	button.setAttribute( 'value', 'Save and Contunue');
	    }
	    button.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    button.addEventListener('click', function(){
	   		// gets form data
			nextAction.newFormData = (function(){
				var newDataHash = {};
				var formPartial = document.getElementById("form_partials");
				var formFields = formPartial.querySelectorAll('[id^="hh_form_"]');
				for (i  = 0; i < formFields.length; i ++ ){
					newDataHash[formFields[i].id] = formFields[i].value; 
				}
				return newDataHash;
			})()
	   		// 	
	    	hHrun(state, nextAction, fullForm);
	    })
	    buttonPlaceHolder.appendChild(button);
    	
	}

	function addErrorMessagesToForm(){
		emptyFormSection("hh_error_message_place_holder")
		var errorPlaceHolder = document.getElementById("hh_error_message_place_holder");
		var p = document.createElement("p");
		p.setAttribute( "class", "t600 color center" )		
		var br = document.createElement("br")
		var i = 1;
		for ( e in state.errorMessages ){
			var seperation;
			if ( Object.keys(state.errorMessages).length > 1 ){
				seperation = " | ";
			}else{
				seperation = "";
			}
			if ( i === Object.keys(state.errorMessages).length ){ seperation = ""};
			
			var error = document.createTextNode(state.errorMessages[e] + seperation );
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

}
