var formController = formController || {};

formController.page = function(currentPage) {
	switch ( currentPage ){
		case 0:
			return "contactForm"
		case 1:
			return "complaintsForm"
		case 2:
			return "checkboxesForm"
		case 3:
			return "painsForm"
		case 4:
			return "otherForm"
		case 5:
			return "concentForm"
		case 6:
			return "confirmSubmit"
	}
};