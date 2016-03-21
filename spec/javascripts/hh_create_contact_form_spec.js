describe("Health History Form Contact", function() {
	var initContactState = new hHrun({}, {action: "init"});
	var currentContactState, lastContactState;	
    var actionSetUp;
    beforeEach(function() {
		actionSetUp = {
			hh_form_first_name: "Jeremy",
			hh_form_last_name: "Bissonnette",
			hh_form_address_1: "351 Carson Drive",
			hh_form_address_2: "",
			hh_form_city: "Kitchener",
			hh_form_provance: "Ont",
			hh_form_postal_code: "N2B2W3",
			hh_form_email: "jeremy@kwmassage.com",
			hh_form_phone: "5197454112",
			hh_form_occupation: "RMT",
			hh_form_referral_source: "Self",
			hh_form_physician: "",
			hh_form_physician_address: "",
		}
	})  

	it("Create form", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		currentContactState = new hHrun(initContactState, action);
		expect(currentContactState.contactForm).toEqual(actionSetUp);
	})

})