var formView = formView || {};

formView.baseFullForm = function(){
	this[0] = document.getElementById("contact"),
	this[1] = document.getElementById("complaints"),
	this[2] = document.getElementById("checkboxes"),
	this[3] = document.getElementById("pains"),
	this[4] = document.getElementById("other"),
	this[5] = document.getElementById("concent")

};
