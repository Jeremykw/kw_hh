describe("Health History Form concent", function() {
	beforeEach(function(){
		kwMassageHealthHistory.concentState = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.concentState.lastPage = 4;
		kwMassageHealthHistory.concentState.currentPage = 5;
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


	it("returns inValid if hh_form_confirm_email is longer than 50 characters", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		action.newFormData.hh_form_confirm_email = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_confirm_email).toEqual("Confirm Email must be less than 50 characters");
	})

	
})