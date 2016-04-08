describe("Health History Form other", function() {
	beforeEach(function(){
		kwMassageHealthHistory.otherState = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.otherState.lastPage = 3;
		kwMassageHealthHistory.otherState.currentPage = 4;
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
		kwMassageHealthHistory.otherState.update(action);
		expect(kwMassageHealthHistory.otherState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.otherState.otherForm).toEqual(otherSetUp);
	})

	it("returns inValid if hh_form_general_health_status longer than 500 characters", function() {
		var action = {
			action: "next",
			newFormData: otherSetUp
		}
		action.newFormData.hh_form_general_health_status = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
		kwMassageHealthHistory.otherState.update(action);
		expect(kwMassageHealthHistory.otherState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.otherState.errorMessages.hh_form_general_health_status).toEqual("General Health Status must be less than 500 characters");
	})

})