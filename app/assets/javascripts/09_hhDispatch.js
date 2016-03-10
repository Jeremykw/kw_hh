// window.onload = init;
// function init(){
// 	var isNewHhForm = document.getElementById("hh_form");
// 	if (isNewHhForm) {
// 		dispatch({}, {action: "init"}, getFullForm());

// 	};

// };

function dispatch(currentForm, action, fullForm){
	var validAction = new actionValidation(currentForm, action);
	var newForm = new hhForm(currentForm, action);
	hhVisabilityFilter(newForm, valid, fullForm);
};

function getFullForm(){
	var initFullForm = {
		0: document.getElementById("contact"),
		1: document.getElementById("complaints"),
		2: document.getElementById("checkboxes"),
		3: document.getElementById("pains"),
		4: document.getElementById("other"),
		5: document.getElementById("concent")
	};
	(function(){
		var array = [0, 1, 2, 3, 4, 5]
		var form = document.getElementById("form_partials");
		array.forEach(function(f) {
		    form.removeChild(initFullForm[f]);
		});
	});
	return initFullForm;
};
