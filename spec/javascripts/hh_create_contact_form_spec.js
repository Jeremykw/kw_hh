describe("Health History Form Create Contact Form", function() {
	var initState = new hHrun({}, {action: "init"});
	var currentState, lastState;
    
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

	it("creates Contact form", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		currentState = new hHrun(initState, action);
		expect(currentState.contactForm).toEqual(actionSetUp);
	})


	it("retains Contact form after Complaints form is created", function() {
		var action = {
			action: "next",
			newFormData: {
				hh_form_primary_complaint: "itchy ass", 
				hh_form_secondary_complaint: "Bees flying around rectum",
				hh_form_sports: "climbing", 
				hh_form_previous_massage_note: "Yes", 
				hh_form_smoke: false, 
			}
		}
		currentState = new hHrun(initState, action);
		expect(currentState.contactForm).toEqual(actionSetUp);
	})

})