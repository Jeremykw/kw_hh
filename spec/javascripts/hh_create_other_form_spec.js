describe("Health History Form other", function() {
	beforeEach(function(){
		otherState = new formModel.baseState();
		otherState.lastPage = 3;
		otherState.currentPage = 4;
	})

    var otherSetUp;
    beforeEach(function() {
		otherSetUp = {}
	})  

	it("Create Valid Form", function() {
		var action = {
			action: "next",
			newFormData: otherSetUp
		}
		otherState.update(action);
		expect(otherState.isValid).toEqual(true);
		expect(otherState.otherForm).toEqual(otherSetUp);
	})

	it("returns inValid if hh_form_general_health_status longer than 500 characters", function() {
		var action = {
			action: "next",
			newFormData: otherSetUp
		}
		action.newFormData.hh_form_general_health_status = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
		otherState.update(action);
		expect(otherState.isValid).toEqual(false);
		expect(otherState.errorMessages.hh_form_general_health_status).toEqual("General Health Status must be less than 500 characters");
	})

})