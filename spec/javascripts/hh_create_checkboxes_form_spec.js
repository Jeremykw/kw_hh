describe("Health History Form Checkboxes", function() {
	beforeEach(function(){
		kwMassageHealthHistory.checkboxesState = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.checkboxesState.lastPage = 1;
		kwMassageHealthHistory.checkboxesState.currentPage = 2;
	})

    var checkboxesSetUp;
    beforeEach(function() {
		checkboxesSetUp = {}
	})  

	it("Create Valid Form", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		kwMassageHealthHistory.checkboxesState.update(action);
		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.checkboxesState.complaintsForm).toEqual(checkboxesSetUp);
	})

	// it("returns inValid if hh_form_primary_complaint is blank", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: checkboxesSetUp
	// 	}
	// 	action.newFormData.hh_form_primary_complaint = "";
	// 	kwMassageHealthHistory.checkboxesState.update(action);
	// 	expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
	// 	expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_primary_complaint).toEqual("Primary Complaint Must Be Present");
	// })

	// it("returns Valid if hh_form_secondary_complaint is blank", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: checkboxesSetUp
	// 	}
	// 	action.newFormData.hh_form_secondary_complaint = "";
	// 	kwMassageHealthHistory.checkboxesState.update(action);
	// 	expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(true);
	// 	expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_secondary_complaint).toEqual(undefined);
	// })	

	
})