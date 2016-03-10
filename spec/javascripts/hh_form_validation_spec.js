describe("validateAction Form Zero", function() {
  
	var initForm = new hhForm({}, {action: "init"});
	var currentPageForm, lastPageForm, valid;
  
	it("should return false and add error message if hh_form_first_name is blank", function() {
		var action = {
			action: "next", 
			newFormData: {hh_form_first_name: "", 
		                hh_form_last_name: "Bissonnette",
		                hh_form_email: "jeremy@kwmassage",
		                hh_form_phone: "5197454112" }
		    }
		validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");
	})

	it("should return false and add error message if hh_form_last_name is blank", function() {
    	var action = {
      		action: "next", 
     		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "5197454112" }
	    }
    	validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_last_name).toEqual("Last Name Must Be Present");

	})

	it("should return false if hh_form_email is blank", function() {
    	var action = {
    		action: "next", 
			newFormData: {hh_form_first_name: "Jeremy", 
			            hh_form_last_name: "Bissonnette",
			            hh_form_email: "",
			            hh_form_phone: "5197454112" }
	    }
	    validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_email).toEqual("Email Must Be Present");

	})

	it("should return false if hh_form_phone is blank", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "" }
	    }
	    validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");

	})


	it("should return true with no errors if name, email, first and last name are filled in", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "5197454112" }
	    }
		validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(true);
	})


	it("should not change page number if not actionValidation === false", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "" }
	    }
	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.page).toEqual(0);

	})

	it("should add errorMessages.phone to newform if actionValidation === false", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "Jeremy", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "" }
	    }
	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");

	})


	it("should add errorMessages.phone and first_name to newform if actionValidation === false", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "" }
	    }
	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");
	    expect(dis.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");

	})

	it("should add errorMessages.first_name to newform if actionValidation === false", function() {
    	var action = {
    		action: "next", 
      		newFormData: {hh_form_first_name: "", 
                    hh_form_last_name: "Bissonnette",
                    hh_form_email: "jeremy@kwmassage",
                    hh_form_phone: "5197454112" }
	    }
	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");

	})


})

