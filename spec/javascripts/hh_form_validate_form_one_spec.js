describe("validateAction Form ONE", function() {
  
	var initForm = new hhForm({}, {action: "init"});
	var actionZero = {
		action: "next", 
		newFormData: {hh_form_first_name: "Jeremy", 
	                hh_form_last_name: "Bissonnette",
	                hh_form_email: "jeremy@kwmassage",
	                hh_form_phone: "5197454112" }
	    }
	var pageZero = new hhForm(initForm, actionZero)

  
	it("should return false and add error message if hh_form_primary_complaint is > 25", function() {
		var action = {
			action: "next", 
			newFormData: {hh_form_primary_complaint: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", 
		                hh_form_secondary_complaint: "itchy but",
		                hh_form_sports: "rock climbing",
		                hh_form_smoke: true }
		    }
		validAction = new actionValidation(pageZero, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_primary_complaint).toEqual("Primary Complaint feild Should be less than 25 Characters");

	})

	it("should return false and add error message if hh_form_primary_complaint is blank", function() {
		var action = {
			action: "next", 
			newFormData: {hh_form_primary_complaint: "", 
		                hh_form_secondary_complaint: "itchy but",
		                hh_form_sports: "rock climbing",
		                hh_form_smoke: true }
		    }
		validAction = new actionValidation(pageZero, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_primary_complaint).toEqual("Primary Complaint Must Be Present");

	})


})