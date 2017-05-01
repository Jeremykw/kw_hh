describe("Health History Form Pains", function() {
	beforeEach(function(){
		painsState = new formModel.baseState();
		painsState.lastPage = 2;
		painsState.currentPage = 3;
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
		painsState.update(action);
		expect(painsState.isValid).toEqual(true);
		expect(painsState.complaintsForm).toEqual(painsSetUp);
	})

	it("returns inValid if hh_form_lowback_note longer than 500 characters", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_low_back_note = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
		painsState.update(action);
		expect(painsState.isValid).toEqual(false);
		expect(painsState.errorMessages.hh_form_low_back_note).toEqual("Low Back Note must be less than 500 characters");
	})

	it("returns Valid if hh_form_arms true", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_arms = true;
		painsState.update(action);
		expect(painsState.isValid).toEqual(true);
		expect(painsState.errorMessages.hh_form_arms).toEqual(undefined);
	})

	it("returns Valid if hh_form_arms false", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_arms = false;
		painsState.update(action);
		expect(painsState.isValid).toEqual(true);
		expect(painsState.errorMessages.hh_form_arms).toEqual(undefined);
	})

	it("returns inValid if hh_form_arms a string", function() {
		var action = {
			action: "next",
			newFormData: painsSetUp
		}
		action.newFormData.hh_form_arms = "Anything other than boolean";
		painsState.update(action);
		expect(painsState.isValid).toEqual(false);
		expect(painsState.errorMessages.hh_form_arms).toEqual("Don't be an asshole");
	})

})