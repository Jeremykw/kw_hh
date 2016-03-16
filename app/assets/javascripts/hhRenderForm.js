function hhRenderForm(state, fullForm){


	if ( state.lastPage !== state.currentPage ){
		renderNewForm(state, fullForm);
	}else if( state.lastPage === 0 && state.currentPage === 0 ){
		renderNewForm(state, fullForm);
	}else{
		addErrorMessagesToForm(state);
	}

	document.getElementById("hh_form").scrollIntoView();

	function renderNewForm(page, fullForm){
		emptyFormSection("form_partials");
		// add form section corresponding to page number
		var formSection = fullForm[page.currentPage]; // form section that needs to be shown
		var form = document.getElementById('form_partials'); // section to insert section above
		form.appendChild(formSection); 
	    var button = document.getElementById("put_button_here")
	    if ( buttonPlaceHolder.children.length < 1 ){		
			if ( state.page === 0 ){
				addButton({state, "next"});				
			}else if ( state.page === 5 ){
				addButton({state, "back"});
			}else {
				addButton({state, "back"});
				addButton({state, "next"});				
			}
		}
	}

	function addButton(state, action){

		var buttonHole = document.getElementById("put_button_here"); // this is where buttons go
	    var element = document.createElement("input"); // create button (type: input)
	    element.type = "button";
	    if ( action === "back" ){
	    	element.setAttribute( 'value', 'Back');
	    }else if( action === "next" ){
	    	element.setAttribute( 'value', 'Save and Contunue');
	    }
	    element.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    element.addEventListener('click', function(){
	   		// gets form data
			state.newFormData = (function(){
				var newDataHash = {};
				var formPartial = document.getElementById("form_partials");
				var formFields = formPartial.querySelectorAll('[id^="hh_form_"]');
				for (i  = 0; i < formFields.length; i ++ ){
					newDataHash[formFields[i].id] = formFields[i].value; 
				}
				return newDataHash;
			})()
	   		// 	
	    	hHrun(state, action, fullForm);
	    });
	    button.appendChild(element);
    	
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
