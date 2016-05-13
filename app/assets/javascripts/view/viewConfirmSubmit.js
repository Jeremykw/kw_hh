var formView = formView || {};

formView.confirmSubmit = {
	error: function(){
		var messageBox = this._createBox();
		var title = document.createElement('h4');
		// console.log(data.createJsonObjectFromState())
		title.textContent = 'Their was a problem submitting your form, please try again.';
		messageBox.appendChild(title);
	},
	preview: function(formPreview){
		formView.render._emptyFormSection('concent');
		var box = document.getElementById('concent');
		box.innerHTML = formPreview;
		document.getElementById("page-title").scrollIntoView(true);
		
		// box.appendChild(form);
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