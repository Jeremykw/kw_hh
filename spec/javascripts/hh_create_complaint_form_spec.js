describe("Health History Form Complaint", function() {
	beforeEach(function(){
		complaintState = new formModel.baseState();
		complaintState.lastPage = 0;
		complaintState.currentPage = 1;
	})

    var complaintSetUp;
    beforeEach(function() {
		complaintSetUp = {
			hh_form_primary_complaint: "itchy ass", 
			hh_form_secondary_complaint: "Bees flying around rectum",
			hh_form_sports: "climbing", 
			hh_form_previous_massage_note: "Bissonnette", 
			hh_form_smoke: false, 
		}
	})  

	it("Create Valid Form", function() {
		var action = {
			action: "next",
			newFormData: complaintSetUp
		}
		complaintState.update(action);
		expect(complaintState.isValid).toEqual(true);
		expect(complaintState.complaintsForm).toEqual(complaintSetUp);
	})

	it("returns inValid if hh_form_primary_complaint is blank", function() {
		var action = {
			action: "next",
			newFormData: complaintSetUp
		}
		action.newFormData.hh_form_primary_complaint = "";
		complaintState.update(action);
		expect(complaintState.isValid).toEqual(false);
		expect(complaintState.errorMessages.hh_form_primary_complaint).toEqual("Primary Complaint Must Be Present");
	})

	it("returns Valid if hh_form_secondary_complaint is blank", function() {
		var action = {
			action: "next",
			newFormData: complaintSetUp
		}
		action.newFormData.hh_form_secondary_complaint = "";
		complaintState.update(action);
		expect(complaintState.isValid).toEqual(true);
		expect(complaintState.errorMessages.hh_form_secondary_complaint).toEqual(undefined);
	})	

	it("returns Valid if hh_form_smoke true", function() {
		var action = {
			action: "next",
			newFormData: complaintSetUp
		}
		action.newFormData.hh_form_smoke = true;
		complaintState.update(action);
		expect(complaintState.isValid).toEqual(true);
		expect(complaintState.errorMessages.hh_form_smoke).toEqual(undefined);
	})

	it("returns Valid if hh_form_smoke false", function() {
		var action = {
			action: "next",
			newFormData: complaintSetUp
		}
		action.newFormData.hh_form_smoke = false;
		complaintState.update(action);
		expect(complaintState.isValid).toEqual(true);
		expect(complaintState.errorMessages.hh_form_smoke).toEqual(undefined);
	})

	it("returns inValid if hh_form_smoke a string", function() {
		var action = {
			action: "next",
			newFormData: complaintSetUp
		}
		action.newFormData.hh_form_smoke = "Anything other than boolean";
		complaintState.update(action);
		expect(complaintState.isValid).toEqual(false);
		expect(complaintState.errorMessages.hh_form_smoke).toEqual("Don't be an asshole");	

	})	
})