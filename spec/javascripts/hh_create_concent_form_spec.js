describe("Health History Form concent", function() {
	beforeEach(function(){
		concentState = new formModel.baseState();
		concentState.lastPage = 4;
		concentState.currentPage = 5;
		concentState.contactForm.hh_form_first_name = 'jeremy';
		concentState.contactForm.hh_form_last_name = 'bissonnette';
		concentState.contactForm.hh_form_email = 'jeremy@kwmassage.com';
	})

    var concentSetUp;
    beforeEach(function() {
		concentSetUp = {
			hh_form_confirm_name: "Jeremy Bissonnette", 
			hh_form_confirm_email: "jeremy@kwmassage.com", 

		}
	})  

	it("Creates Valid Form", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}

		concentState.update(action);
		expect(concentState.isValid).toEqual(true);
		expect(concentState.concentForm).toEqual(concentSetUp);
	})

	it("returns inValid if hh_form_confirm_name is blank", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "";
		concentState.update(action);
		expect(concentState.isValid).toEqual(false);
		expect(concentState.errorMessages.hh_form_confirm_name).toEqual("Confirm Name Must Be Present");
	})

	it("returns inValid if hh_form_confirm_email is blank", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_email = "";
		concentState.update(action);
		expect(concentState.isValid).toEqual(false);
		expect(concentState.errorMessages.hh_form_confirm_email).toEqual("Confirm Email Must Be Present");
	})


	// it("returns inValid if hh_form_confirm_email is longer than 50 characters", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: concentSetUp
	// 	}
	// 	action.newFormData.hh_form_confirm_email = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
	// 	concentState.update(action);
	// 	expect(concentState.isValid).toEqual(false);
	// 	expect(concentState.errorMessages.hh_form_confirm_email).toEqual("Confirm Email must be less than 50 characters");
	// })

	it("returns Valid if confirm_name matches first_name + last name", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "Jeremy Bissonnette";
		concentState.update(action);
		expect(concentState.isValid).toEqual(true);
		expect(concentState.errorMessages.hh_form_confirm_name).toEqual(undefined);
	})
	
	it("returns Valid if confirm_name matches first_name + last name with verious capitals", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "JeremY BIssonnette";
		concentState.update(action);
		expect(concentState.isValid).toEqual(true);
		expect(concentState.errorMessages.hh_form_confirm_name).toEqual(undefined);
	})

	it("returns inValid if confirm_name does not matches first_name + last", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "JeremY BInette";
		concentState.update(action);
		expect(concentState.isValid).toEqual(false);
		expect(concentState.errorMessages.hh_form_confirm_name).toEqual("Confirm Name must be equal to First Name plus Last Name");
	})	
	
	it("returns inValid if confirm_name does not matches first_name + last, 2", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "JemY BIssonnette";
		concentState.update(action);
		expect(concentState.isValid).toEqual(false);
		expect(concentState.errorMessages.hh_form_confirm_name).toEqual("Confirm Name must be equal to First Name plus Last Name");
	})
	
	it("returns Valid if confirm_email matches email", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_email = "jeremy@kwmassage.com";
		concentState.update(action);
		expect(concentState.isValid).toEqual(true);
		expect(concentState.errorMessages.hh_form_confirm_email).toEqual(undefined);
	})
	
	it("returns inValid if confirm_email doesnot match email", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_email = "jerem@kwmassage.com";
		concentState.update(action);
		expect(concentState.isValid).toEqual(false);
		expect(concentState.errorMessages.hh_form_confirm_email).toEqual("Confirm Email must match Email");
	})
})