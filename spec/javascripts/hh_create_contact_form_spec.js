describe("Health History Form Contact", function() {
	var initContactState = new kwMassageHealthHistory.hHrun({}, {action: "init"});
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
		currentContactState = new kwMassageHealthHistory.hHrun(initContactState, action);
		expect(currentContactState.contactForm.data).toEqual(actionSetUp);
	})

	// it("Returns true if contact form is valid", function() {
	// 	expect(currentContactState.contactForm.isValid).toEqual(true);
	// })

	// it("Returns false if first_name is missing and adds corect message", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: actionSetUp
	// 	}
	// 	action.newFormData.hh_form_first_name = ""
	// 	currentContactState = new kwMassageHealthHistory.hHrun(initContactState, action);
	// 	expect(currentContactState.contactForm.isValid).toEqual(false);
	// 	expect(currentContactState.contactForm.errors.hh_form_first_name).toEqual("First Name Must Be Present");
	// })


	// it("Returns false if last_name is missing and adds corect message", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: actionSetUp
	// 	}
	// 	action.newFormData.hh_form_last_name = ""
	// 	currentContactState = new kwMassageHealthHistory.hHrun(initContactState, action);
	// 	expect(currentContactState.contactForm.isValid).toEqual(false);
	// 	expect(currentContactState.contactForm.errors.hh_form_last_name).toEqual("Last Name Must Be Present");
	// })

	// it("Returns false if phone is missing and adds corect message", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: actionSetUp
	// 	}
	// 	action.newFormData.hh_form_phone = ""
	// 	currentContactState = new kwMassageHealthHistory.hHrun(initContactState, action);
	// 	expect(currentContactState.contactForm.isValid).toEqual(false);
	// 	expect(currentContactState.contactForm.errors.hh_form_phone).toEqual("Phone Must Be Present");
	// })

	// it("Returns true if referral_source is missing and doesn't add error message", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: actionSetUp
	// 	}
	// 	action.newFormData.hh_form_referral_source = ""
	// 	currentContactState = new kwMassageHealthHistory.hHrun(initContactState, action);
	// 	expect(currentContactState.contactForm.isValid).toEqual(true);
	// 	expect(currentContactState.contactForm.errors.hh_form_referral_source).toEqual(undefined);
	// })

	// it("Returns false if first_name longer than 50 and adds corect message", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: actionSetUp
	// 	}
	// 	action.newFormData.hh_form_first_name = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
	// 	currentContactState = new kwMassageHealthHistory.hHrun(initContactState, action);
	// 	expect(currentContactState.contactForm.isValid).toEqual(false);
	// 	expect(currentContactState.contactForm.errors.hh_form_first_name).toEqual("First Name must be less than 50 characters");
	// })

	// it("Returns false if last_name longer than 50 and adds corect message", function() {
	// 	var action = {
	// 		action: "next",
	// 		newFormData: actionSetUp
	// 	}
	// 	action.newFormData.hh_form_last_name = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
	// 	currentContactState = new kwMassageHealthHistory.hHrun(initContactState, action);

	// 	expect(currentContactState.contactForm.isValid).toEqual(false);
	// 	expect(currentContactState.contactForm.errors.hh_form_last_name).toEqual("Last Name must be less than 50 characters");
	// })

	// it("State.isStateValid should return false if their is and error", function() {
	// 	expect(currentContactState.isStateValid).toEqual(false);
	// })	
})