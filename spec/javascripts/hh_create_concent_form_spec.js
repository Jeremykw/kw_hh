describe("Health History Form concent", function() {
	beforeEach(function(){
		kwMassageHealthHistory.concentState = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.concentState.lastPage = 4;
		kwMassageHealthHistory.concentState.currentPage = 5;
		kwMassageHealthHistory.concentState.contactForm.hh_form_first_name = 'jeremy';
		kwMassageHealthHistory.concentState.contactForm.hh_form_last_name = 'bissonnette';
		kwMassageHealthHistory.concentState.contactForm.hh_form_email = 'jeremy@kwmassage.com';
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

		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.concentState.concentForm).toEqual(concentSetUp);
	})

	it("returns inValid if hh_form_confirm_name is blank", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_name).toEqual("Confirm Name Must Be Present");
	})

	it("returns inValid if hh_form_confirm_email is blank", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_email = "";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_email).toEqual("Confirm Email Must Be Present");
	})


	// it("returns inValid if hh_form_confirm_email is longer than 50 characters", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: concentSetUp
	// 	}
	// 	action.newFormData.hh_form_confirm_email = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
	// 	kwMassageHealthHistory.concentState.update(action);
	// 	expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
	// 	expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_email).toEqual("Confirm Email must be less than 50 characters");
	// })

	it("returns Valid if confirm_name matches first_name + last name", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "Jeremy Bissonnette";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_name).toEqual(undefined);
	})
	
	it("returns Valid if confirm_name matches first_name + last name with verious capitals", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "JeremY BIssonnette";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_name).toEqual(undefined);
	})

	it("returns inValid if confirm_name does not matches first_name + last", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "JeremY BInette";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_name).toEqual("Confirm Name must be equal to First Name plus Last Name");
	})	
	
	it("returns inValid if confirm_name does not matches first_name + last, 2", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_name = "JemY BIssonnette";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_name).toEqual("Confirm Name must be equal to First Name plus Last Name");
	})
	
	it("returns Valid if confirm_email matches email", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_email = "jeremy@kwmassage.com";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_email).toEqual(undefined);
	})
	
	it("returns inValid if confirm_email doesnot match email", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_email = "jerem@kwmassage.com";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_email).toEqual("Confirm Email must match Email");
	})
})