var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.confirmSubmit = {

	domManipulation: function(data){
		var messageBox = this._createBox();
		var title = document.createElement('h4');
		var hhObj = { 
			"hh_form": { 
				"first_name": "jeremy", 
				"last_name": "bissonentte", 
				"email": "jeremy@kwmassage.com", 
				"phone": "5555555555", 
				"primary_complaint": "nothing", 
				"confirm_name": "jeremy bissonnette",
				"confirm_email": "jeremy@kwmassage.com"
			}
		}	
		$.ajax("/hh_forms.json", {
			data: kwMassageHealthHistory.hhState.createJsonObjectFromState(),
			type: 'POST',
			// dataType: 'json',
			// contentType: 'application/json',
			beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},

			success: function() {
				title.textContent = 'Your Health History form was submited.';
				messageBox.appendChild(title);		     
			},
			error: function() {
				// console.log(data.createJsonObjectFromState())
				title.textContent = 'Their was a problem submitting your form, please try again.';
				messageBox.appendChild(title);
			}
		});

	},
	errors: function(form){

	},
	_createBox: function(){
		var container = document.getElementById('hh_form');
		var box = document.createElement('div');
		box.setAttribute('id', 'submit_message');
		box.setAttribute('class', 'row col_two_third testimonial');
		container.appendChild(box);
		return box;
	}
	
}

