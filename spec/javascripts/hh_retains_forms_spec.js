describe("Health History Retain Forms", function() {
	kwMassageHealthHistory.hhState = new kwMassageHealthHistory.baseState();	
	var initRetainState = kwMassageHealthHistory.hHrun(kwMassageHealthHistory.hhState, {});
  
	var currentRetainState, lastRetainState;

    var contact = {
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
	var other = {
		current_medications: "test me",
		surgery: "test me",
		general_health_status: "test me",
		other_healthcare_list: "test me",
		injuries: "test me",
		mental_condition_note: "test me",
		other_medical_conditions: "test me",
		special_notes: "test me"
	}
	var concent = {
		confirm: false,
		confirm_name: "confirm",
		confirm_email: "confirm"		
	}

	it("creates Contact form", function() {
		var action = {
			action: "next",
			newFormData: contact
		}
		currentRetainState = kwMassageHealthHistory.hHrun(initRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
	})

	it("retains Contact form after Complaints form is created", function() {

		var action = {
			action: "next",
			newFormData: complaints
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
	})

	it("retains Contact and Complaints form after checkBoxes form is created", function() {
		var action = {
			action: "next",
			newFormData: checkBoxes
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
	})


	it("retains Contact, Complaints, CheckBoxes form after pains form is created", function() {
		var action = {
			action: "next",
			newFormData: pains
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.currentPage).toEqual(4);

	})	

	it("retains Contact, Complaints, CheckBoxes, Pains form after Other form is created", function() {
		var action = {
			action: "next",
			newFormData: other
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.otherForm).toEqual(other);
		expect(currentRetainState.currentPage).toEqual(5);

	})	

	it("retains Contact, Complaints, CheckBoxes, Pains, Other form after Concent form is created", function() {
		var action = {
			action: "back",
			newFormData: concent
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.otherForm).toEqual(other);
		expect(currentRetainState.concentForm).toEqual(concent);
		expect(currentRetainState.currentPage).toEqual(4);

	})

	it("retains Contact, Complaints, CheckBoxes, Pains, Other, Concent form when Navigation back to other", function() {
		var action = {
			action: "back",
			newFormData: other
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.otherForm).toEqual(other);
		expect(currentRetainState.concentForm).toEqual(concent);

	})

	it("retains Contact, Complaints, CheckBoxes, Pains, Other, Concent form when Navigation back pains", function() {
		var action = {
			action: "back",
			newFormData: pains
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.otherForm).toEqual(other);
		expect(currentRetainState.concentForm).toEqual(concent);

	})

	it("retains Contact, Complaints, CheckBoxes, Pains, Other, Concent form when Navigation back to checkBoxes", function() {
		var action = {
			action: "back",
			newFormData: checkBoxes
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.otherForm).toEqual(other);
		expect(currentRetainState.concentForm).toEqual(concent);

	})	

	it("retains Contact, Complaints, CheckBoxes, Pains, Other, Concent form when Navigation back to complaints", function() {
		var action = {
			action: "back",
			newFormData: complaints
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.otherForm).toEqual(other);
		expect(currentRetainState.concentForm).toEqual(concent);

	})	

	it("retains Contact, Complaints, CheckBoxes, Pains, Other, Concent form when Navigation back to contact", function() {
		var action = {
			action: "back",
			newFormData: contact
		}
		lastRetainState = currentRetainState;
		currentRetainState = new kwMassageHealthHistory.hHrun(lastRetainState, action);

		expect(currentRetainState.contactForm).toEqual(contact);
		expect(currentRetainState.complaintsForm).toEqual(complaints);
		expect(currentRetainState.checkboxesForm).toEqual(checkBoxes);
		expect(currentRetainState.painsForm).toEqual(pains);
		expect(currentRetainState.otherForm).toEqual(other);
		expect(currentRetainState.concentForm).toEqual(concent);

	})	
})