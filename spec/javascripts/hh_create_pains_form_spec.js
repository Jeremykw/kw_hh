describe("Health History Form Pains", function() {
	beforeEach(function(){
		kwMassageHealthHistory.painsState = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.painsState.lastPage = 2;
		kwMassageHealthHistory.painsState.currentPage = 3;
	})

    var painsSetUp;
    beforeEach(function() {
		painsSetUp = {}
	})  

	it("Create Valid Form", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		kwMassageHealthHistory.painsState.update(action);
		expect(kwMassageHealthHistory.painsState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.painsState.complaintsForm).toEqual(painsSetUp);
	})

	it("returns inValid if hh_form_lowback_note longer than 500 characters", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_low_back_note = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
		kwMassageHealthHistory.painsState.update(action);
		expect(kwMassageHealthHistory.painsState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.painsState.errorMessages.hh_form_low_back_note).toEqual("Low Back Note must be less than 500 characters");
	})

	it("returns Valid if hh_form_arms true", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_arms = true;
		kwMassageHealthHistory.painsState.update(action);
		expect(kwMassageHealthHistory.painsState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.painsState.errorMessages.hh_form_arms).toEqual(undefined);
	})

	it("returns Valid if hh_form_arms false", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_arms = false;
		kwMassageHealthHistory.painsState.update(action);
		expect(kwMassageHealthHistory.painsState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.painsState.errorMessages.hh_form_arms).toEqual(undefined);
	})

	it("returns inValid if hh_form_arms a string", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_arms = "Anything other than boolean";
		kwMassageHealthHistory.painsState.update(action);
		expect(kwMassageHealthHistory.painsState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.painsState.errorMessages.hh_form_arms).toEqual("Don't be an asshole");
	})

})