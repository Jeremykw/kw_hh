describe("Health History Retain Form", function() {
	var initContactState = new hHrun({}, {action: "init"});
	var currentContactState, lastContactState;
	var complaints = {
		hh_form_primary_complaint: "itchy ass", 
		hh_form_secondary_complaint: "Bees flying around rectum",
		hh_form_sports: "climbing", 
		hh_form_previous_massage_note: "Yes", 
		hh_form_smoke: false, 
	}
	var checkBoxes = {
		shortness_of_breath: true,
		bronchitis: true,
		asthma: true,
		emphysema: true,
		high_bp: true,
		low_bp: true,
		cchf: true,
		heat_attack: false,
		phlebitis: true,
		stroke_CVA: true,
		pacemaker: true,
		heart_disease: false
	}
	var pains = {
		neck: true,
	    neck_note: "Really Painfull",
	    low_back: true,
	    low_back_note: "Really Painfull",
	    mid_back: true,
	    mid_back_note: "Really Painfull",
	    upper_back: true,
	    upper_back_note: "Really Painfull",
	    shoulders: true,
	    shoulders_note: "Really Painfull",
	    arms: true,
	    arms_note: "Really Painfull",
	    legs: true,
	    legs_note: "Really Painfull",
	    knees: true,
	    knees_note: "Really Painfull",
	    other: true,
	    other_note: "Really Painfull",		
	}	
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
		currentContactState = new hHrun(initContactState, action);

		expect(currentContactState.contactForm).toEqual(actionSetUp);
	})

	it("retains Contact form after Complaints form is created", function() {

		var action = {
			action: "next",
			newFormData: complaints
		}
		lastContactState = currentContactState;
		currentContactState = new hHrun(lastContactState, action);

		expect(currentContactState.contactForm).toEqual(actionSetUp);
	})

	it("retains Contact and Complaints form after checkBoxes form is created", function() {
		var action = {
			action: "next",
			newFormData: checkBoxes
		}
		lastContactState = currentContactState;
		currentContactState = new hHrun(lastContactState, action);

		expect(currentContactState.contactForm).toEqual(actionSetUp);
		expect(currentContactState.complaintsForm).toEqual(complaints);
		expect(currentContactState.checkboxesForm).toEqual(checkBoxes);
	})


	it("retains Contact, Complaints, CheckBoxes form after pains form is created", function() {
		var action = {
			action: "back",
			newFormData: pains
		}
		lastContactState = currentContactState;
		currentContactState = new hHrun(lastContactState, action);

		expect(currentContactState.contactForm).toEqual(actionSetUp);
		expect(currentContactState.complaintsForm).toEqual(complaints);
		expect(currentContactState.checkboxesForm).toEqual(checkBoxes);
		expect(currentContactState.painsForm).toEqual(pains);
		expect(currentContactState.currentPage).toEqual(2);

	})	


})