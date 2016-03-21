describe("Health History Create Complaint Form", function() {
	var initState = new hHrun({lastPage: 0, thisPage: 1}, {action: "next"});
	var currentState, lastState;
    
    var actionSetUp;
    beforeEach(function() {
		actionSetUp = {
			hh_form_primary_complaint: "itchy ass", 
			hh_form_secondary_complaint: "Bees flying around rectum",
			hh_form_sports: "climbing", 
			hh_form_previous_massage_note: "Bissonnette", 
			hh_form_smoke: false, 
		}
	})  

	it("creates Complaint Form", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		currentState = new hHrun(initState, action);
		expect(currentState).toEqual(actionSetUp);
	})

})