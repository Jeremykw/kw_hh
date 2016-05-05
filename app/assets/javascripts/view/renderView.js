var formView = formView || {};

formView.render = {
	
	dateCheckboxToggle: function(state, checkboxID, dateID){
		var checkbox = document.getElementById(checkboxID);
		document.getElementById(dateID).style.display = state[dateID];
		if ( !state[checkboxID] ){
			checkbox.addEventListener('change', (function(){
				return function(){formView.render._toggle(state, dateID)};
			})(state, dateID))
			state[checkboxID] = true;
		}
	},
	_toggle: function toggle(state, element){
		if ( state[element] === "none" ){
			document.getElementById(element).style.display = 'block';
			state[element] = "block";
		}else{
			document.getElementById(element).style.display = 'none';
			state[element] = "none";
		}
	},
	form : function(state){
		this._renderNewForm(state);
		document.getElementById("page-title").scrollIntoView(true);
	},
	errors: function(state){
		this._addErrorMessagesToForm(state);
		document.getElementById("hh_error_message_place_holder").scrollIntoView(true);
		window.scrollBy(0, -60);
	},
	_renderNewForm: function(state, fullForm){
		this._emptyFormSection("form_partials");
		// add form section corresponding to state number
		var formSection = formView.fullForm[state.currentPage]; // form section that needs to be shown
		var form = document.getElementById('form_partials'); // section to insert section above
		form.appendChild(formSection); 
	    var buttonPlaceHolder = document.getElementById("put_button_here");
		this._emptyFormSection('put_button_here');
	    if ( buttonPlaceHolder && buttonPlaceHolder.children.length < 1 ){		
			if ( state.currentPage === 0 ){
				this._addButton(state, "next", fullForm);				
			}else if ( state.currentPage === 5 ){
				this._addButton(state, "back", fullForm);
				this._addButton(state, "submit", fullForm)
			}else {
				this._addButton(state, "back", fullForm);
				this._addButton(state, "next", fullForm);				
			}
		}
	},
	_addButton: function(state, action, fullForm){
		var nextAction = {};
		var buttonPlaceHolder = document.getElementById("put_button_here"); // this is where buttons go
	    var button = document.createElement("input"); // create button (type: input)
		nextAction.action = action;
	    button.type = "button";
	    if ( action === "back" ){
	    	button.setAttribute( 'value', 'Back' );
	    }else if( action === "next" ){
	    	button.setAttribute( 'value', 'Save and Contunue' );
	    }else if( action === 'submit' ){
	    	button.setAttribute( 'value', 'Submit Form' );
	    }
	    button.setAttribute('class', "btn btn-danger topmargin-sm rightmargin-sm");
	    button.addEventListener('click', (function(){
	   		// gets form data
			return	function(){
				nextAction.newFormData = (function(){
					var newDataHash = {};
					var formPartial = document.getElementById("form_partials");
					var formFields = formPartial.querySelectorAll('[id^="hh_form_"]');
					for (i  = 0; i < formFields.length; i ++ ){
						newDataHash[formFields[i].id] = formFields[i].value; 
					}
					return newDataHash;
				})();	
		    	formController.update(nextAction);
		    }
	    })())
	    buttonPlaceHolder.appendChild(button);
    	
	},
	_addErrorMessagesToForm: function(state){
		this._emptyFormSection("hh_error_message_place_holder")
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
	},
	_emptyFormSection: function(section){
		var formPartials = document.getElementById(section);
		if( formPartials ){
			while (formPartials.firstChild) { 
			    formPartials.removeChild(formPartials.firstChild);
			}
		}
	}

}
