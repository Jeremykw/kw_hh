describe("validateAction Form ZERO", function() {
    var actionSetUp;
	var initForm = new hhForm({}, {action: "init"});
    beforeEach(function() {
		actionSetUp = {
			hh_form_first_name: "Jeremy",
			hh_form_last_name: "Bissonnette",
			hh_form_address_1: "351 Carson Drive",
			hh_form_address_2: "",
			hh_form_city: "Kitchener",
			hh_form_provance: "Ont",
			hh_form_postal_code: "N2B2W3",
			hh_form_email: "jeremy@kwmassage.com",
			hh_form_phone: "5197454112",
			hh_form_occupation: "RMT",
			hh_form_referral_source: "Self",
			hh_form_physician: "",
			hh_form_physician_address: "",
		}
	});  

	it("should return false and add error message if hh_form_first_name is blank", function() {
		var action = {
			action: "next", 
			newFormData: actionSetUp
		    }
		action.newFormData["hh_form_first_name"] = "";
		validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");
	})

	it("should return false and add error message if hh_form_last_name is blank", function() {
    	var action = {
      		action: "next", 
     		newFormData: actionSetUp
     		}
		action.newFormData["hh_form_last_name"] = "";
    	validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_last_name).toEqual("Last Name Must Be Present");

	})

	it("should return false if hh_form_email is blank", function() {
    	var action = {
    		action: "next", 
     		newFormData: actionSetUp
     		}
		action.newFormData["hh_form_email"] = "";

	    validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_email).toEqual("Email Must Be Present");

	})

	it("should return false if hh_form_phone is blank", function() {
    	var action = {
    		action: "next", 
     		newFormData: actionSetUp
     		}
		action.newFormData["hh_form_phone"] = "";

	    validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		expect(validAction.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");

	})


	it("should return true with no errors if name, email, first and last name are filled in", function() {
    	var action = {
    		action: "next", 
     		newFormData: actionSetUp
     		}
		validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(true);
	})


	it("should not change page number if not actionValidation === false", function() {
    	var action = {
    		action: "next", 
     		newFormData: actionSetUp
     		}
		action.newFormData["hh_form_phone"] = "";

	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.page).toEqual(0);

	})

	it("should add errorMessages.phone to newform if actionValidation === false", function() {
    	var action = {
    		action: "next", 
     		newFormData: actionSetUp
     		}
		action.newFormData["hh_form_phone"] = "";

	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");

	})


	it("should add errorMessages.phone and first_name to newform if actionValidation === false", function() {
    	var action = {
    		action: "next", 
     		newFormData: actionSetUp
     		}
		action.newFormData["hh_form_first_name"] = "";
		action.newFormData["hh_form_phone"] = "";

	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");
	    expect(dis.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");

	})

	it("dispatch should add errorMessages.first_name to newform if actionValidation === false", function() {
    	var action = {
    		action: "next", 
			newFormData: actionSetUp
		    }
		action.newFormData["hh_form_first_name"] = "";
	    // currentPageForm = new hhForm(initForm, action);
	    var dis = dispatch(initForm, action, {});
	    expect(dis.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");

	})

	it("should return false and add error message if hh_form_city is > 25", function() {
		var action = {
			action: "next", 
			newFormData: actionSetUp
		    }
		action.newFormData["hh_form_city"] = "kiyuhgfvytrfhkutgfhyfgfhhugygfhjuugghju";
		validAction = new actionValidation(initForm, action)
		expect(validAction.isValid).toEqual(false);
		//
		//  capitalizatrion of this message needs to be fixed
		//
		expect(validAction.errorMessages.hh_form_city).toEqual("city must be less than 25 characters");

	})


})

