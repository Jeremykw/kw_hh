describe("Health History Form concent", function() {
	beforeEach(function(){
		kwMassageHealthHistory.concentState = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.concentState.lastPage = 4;
		kwMassageHealthHistory.concentState.currentPage = 5;
	})

    var concentSetUp;
    beforeEach(function() {
		concentSetUp = {
			hh_form_confirm_name: "itchy ass", 
			hh_form_confirm_email: "itchy ass", 

		}
	})  

	it("Create Valid Form", function() {
		var action = {
			action: "next",
			newFormData: concentSetUp
		}
		kwMassageHealthHistory.concentState.update(action);
		expect(kwMassageHealthHistory.concentState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.concentState.concentForm).toEqual(concentSetUp);
	})

	// it("returns inValid if hh_form_primary_concent is blank", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: concentSetUp
	// 	}
	// 	action.newFormData.hh_form_primary_concent = "";
	// 	kwMassageHealthHistory.concentState.update(action);
	// 	expect(kwMassageHealthHistory.concentState.isValid).toEqual(false);
	// 	expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_primary_concent).toEqual("Primary concent Must Be Present");
	// })

	// it("returns Valid if hh_form_secondary_concent is blank", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: concentSetUp
	// 	}
	// 	action.newFormData.hh_form_secondary_concent = "";
	// 	kwMassageHealthHistory.concentState.update(action);
	// 	expect(kwMassageHealthHistory.concentState.isValid).toEqual(true);
	// 	expect(kwMassageHealthHistory.concentState.errorMessages.hh_form_secondary_concent).toEqual(undefined);
	// })	

	
})