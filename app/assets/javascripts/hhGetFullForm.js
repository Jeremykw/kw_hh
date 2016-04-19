var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.baseFullForm = function(){
	this[0] = document.getElementById("contact"),
	this[1] = document.getElementById("complaints"),
	this[2] = document.getElementById("checkboxes"),
	this[3] = document.getElementById("pains"),
	this[4] = document.getElementById("other"),
	this[5] = document.getElementById("concent"),
	this[6] = this._addConfimSubmit();

};

kwMassageHealthHistory.baseFullForm.prototype._addConfimSubmit = function(){
	var confirmSubmit = document.createElement('div');
	var title = document.createElement('h4');
	confirmSubmit.setAttribute('id', 'hh_form');
	confirmSubmit.setAttribute('class', 'row col_two_third testimonial');
	title.innerHTML = 'Your health History Form has been submitted';
	confirmSubmit.appendChild(title);

	return confirmSubmit;
}
