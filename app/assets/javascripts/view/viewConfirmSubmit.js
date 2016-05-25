var formView = formView || {};

formView.confirmSubmit = {
	error: function(){
		var errorPlaceHolder = document.getElementById("hh_error_message_place_holder").scrollIntoView(true);
		var p = document.createElement("p");
		p.setAttribute( "class", "t600 color center" )		
		p.innerHTML = ' Their was a problem submitting your form, please try again.';
		errorPlaceHolder.appendChild(p);
		errorPlaceHolder.scrollIntoView(true);
	},
	preview: function(formPreview){
		formView.render._emptyFormSection('concent');
		var box = document.getElementById('concent');
		box.innerHTML = formPreview;
		document.getElementById("page-title").scrollIntoView(true);
	},
	_createBox: function(){
		var container = document.getElementById('hh_form');
		var box = document.createElement('div');
		box.setAttribute('id', 'submit_message');
		box.setAttribute('class', 'row col_two_third testimonial');
		container.appendChild(box);
		return box;
	}
};

