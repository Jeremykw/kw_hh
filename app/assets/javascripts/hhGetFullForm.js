var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.getFullForm = function(){
	var initFullForm = {
		0: document.getElementById("contact"),
		1: document.getElementById("complaints"),
		2: document.getElementById("checkboxes"),
		3: document.getElementById("pains"),
		4: document.getElementById("other"),
		5: document.getElementById("concent"),
	};
	(function(){ // Empty form_partial div 
		var array = [0, 1, 2, 3, 4, 5]
		var form = document.getElementById("form_partials");
		array.forEach(function(f) {
		    form.removeChild(initFullForm[f]);
		});
	});
	return initFullForm;
};

kwMassageHealthHistory.getFullForm.prototype._addConfimSubmit = function(){

}
