describe("Health History Form Complaint", function() {
	var lastComplaintState = new hHrun({lastPage: 0, currentPage: 0}, {action: "next"});
	var currentComplaintState, lastComplaintState;
    
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

	it("Create Form", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		currentComplaintState = new hHrun(lastComplaintState, action);
		expect(currentComplaintState.complaintsForm).toEqual(actionSetUp);
	})

})