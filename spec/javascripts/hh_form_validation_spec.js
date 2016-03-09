describe("Health History Validate Form Zero", function() {
  
	var initForm = new hhForm({}, {action: "init"});
	var currentPageForm, lastPageForm;

	it("should respond to isValid", function() {
    	expect(initForm.isValid).toBeDefined();
  	})
  
	it("should return false if hh_form_first_name is blank", function() {
		var action = {
			action: "next", 
			newFormData: {hh_form_first_name: "", 
		                hh_form_last_name: "Bissonnette",
		                hh_form_email: "jeremy@kwmassage",
		                hh_form_phone: "5197454112" }
		    }
		currentPageForm = new hhForm(initForm, action);
		expect(currentPageForm.isValid).toEqual(false);
		expect(currentPageForm.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");
	})

	it("should return false if hh_form_last_name is blank", function() {
    	var action = {
      		action: "next", 
     		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "5197454112" }
	    }
    	currentPageForm = new hhForm(initForm, action);
    	expect(currentPageForm.isValid).toEqual(false);
    	expect(currentPageForm.errorMessages.hh_form_last_name).toEqual("Last Name Must Be Present");

	})

	it("should return false if hh_form_email is blank", function() {
    	var action = {
    		action: "next", 
			newFormData: {hh_form_first_name: "Jeremy", 
			            hh_form_last_name: "Bissonnette",
			            hh_form_email: "",
			            hh_form_phone: "5197454112" }
	    }
	    currentPageForm = new hhForm(initForm, action);
	    expect(currentPageForm.isValid).toEqual(false);
	    expect(currentPageForm.errorMessages.hh_form_email).toEqual("Email Must Be Present");

	})

	it("should return false if hh_form_phone is blank", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "" }
	    }
	    currentPageForm = new hhForm(initForm, action);
	    expect(currentPageForm.isValid).toEqual(false);
	    expect(currentPageForm.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");

	})


	it("should return true if name, email, first and last name are filled in", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "5197454112" }
	    }
	    currentPageForm = new hhForm(initForm, action);
	    expect(currentPageForm.isValid).toEqual(true);

	})


	it("should not change page number if not isValid === false", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "" }
	    }
	    currentPageForm = new hhForm(initForm, action);
	    expect(currentPageForm.page).toEqual(0);

	})


})

