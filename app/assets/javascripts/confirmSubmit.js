var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.confirmSubmit = {

	domManipulation: function(data){
		var hh_from = kwMassageHealthHistory.validate.mergeErrors(
			kwMassageHealthHistory.hhState.contactForm,
			kwMassageHealthHistory.hhState.complaintsForm,
			kwMassageHealthHistory.hhState.checkboxesForm,
			kwMassageHealthHistory.hhState.painsForm,
			kwMassageHealthHistory.hhState.otherForm,
			kwMassageHealthHistory.hhState.concentForm
		)

		var container = document.getElementById('hh_form')
		var title = document.createElement('h4');
		var messageBox = document.createElement('div');
		messageBox.setAttribute('id', 'submit_message');
		messageBox.setAttribute('class', 'row col_two_third testimonial');
		container.appendChild(messageBox)
		debugger
		$.ajax(this.href + "/..", {
			date: hh_form,
			type: 'POST',
			beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},

			success: function() {
				title.textContent = 'Your Health History form was submited.';
				messageBox.appendChild(title);		     
			},
			error: function() {
				title.textContent = 'Their was a problem submitting your form, please try again.';
				messageBox.appendChild(title);
			}
		});

	},
	errors: function(form){

	}
}

