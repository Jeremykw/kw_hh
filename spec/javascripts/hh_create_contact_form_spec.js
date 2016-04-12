describe("Health History Form Contact", function() {
	beforeEach(function(){
		kwMassageHealthHistory.contactState = new kwMassageHealthHistory.baseState();	
	})

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
		kwMassageHealthHistory.contactState.update(action);
		expect(kwMassageHealthHistory.contactState.contactForm).toEqual(actionSetUp);
		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.currentPage).toEqual(1);
	})

	it("Returns false if first_name is missing and adds corect message", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_first_name = ""
		kwMassageHealthHistory.contactState.update(action);
		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_first_name).toEqual("First Name Must Be Present");
		expect(kwMassageHealthHistory.contactState.currentPage).toEqual(0);

	})


	it("Returns false if last_name is missing and adds corect message", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_last_name = ""
		kwMassageHealthHistory.contactState.update(action);
		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_last_name).toEqual("Last Name Must Be Present");
		expect(kwMassageHealthHistory.contactState.currentPage).toEqual(0);

	})

	it("Returns false if phone is missing and adds corect message", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_phone = ""
		kwMassageHealthHistory.contactState.update(action);
		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_phone).toEqual("Phone Must Be Present");
	})

	it("Returns true if referral_source is missing and doesn't add error message", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_referral_source = ""
		kwMassageHealthHistory.contactState.update(action);
		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_referral_source).toEqual(undefined);
		expect(kwMassageHealthHistory.contactState.currentPage).toEqual(1);

	})

	it("Returns false if first_name is longer than 50 and adds corect message", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_first_name = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
		kwMassageHealthHistory.contactState.update(action);
		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_first_name).toEqual("First Name must be less than 50 characters");
	})

	it("Returns false if last_name is longer than 50 and adds corect message", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_last_name = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_last_name).toEqual("Last Name must be less than 50 characters");
	})

	it("Returns false if phone is has letters", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_phone = "sss"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_phone).toEqual("Phone Must be in the xxx-xxx-xxxx format");
	})


	it("Returns true if phone has barakets", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_phone = "(519)7454112"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_phone).toEqual(undefined);
	})

	it("Returns true if phone has dashes", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_phone = "519-745-4112"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_phone).toEqual(undefined);
	})

	it("Returns true if phone has barackets and dashes", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_phone = "(519)-745-4112"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_phone).toEqual(undefined);
	})

	it("Returns false if phone dashes in the wrong place", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_phone = "(519)-74-54112"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_phone).toEqual("Phone Must be in the xxx-xxx-xxxx format");
	})

	it("Returns false if Postal Code if postal code is all numbers", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_postal_code = "7454112"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_postal_code).toEqual("Postal Code Must be in the H0H 0H0 format");
	})

	it("Returns false if Postal Code if postal code is all letters", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_postal_code = "hohoho"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_postal_code).toEqual("Postal Code Must be in the H0H 0H0 format");
	})

	it("Returns true if Postal Code if postal code correct with space", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_postal_code = "N0K 1N0"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_postal_code).toEqual(undefined);
	})

	it("Returns true if Postal Code if postal code correct without space", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_postal_code = "N0K1N0"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_postal_code).toEqual(undefined);
	})	

	it("Returns true if Postal Code if postal code correct with lowercase", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_postal_code = "h0h0h0"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_postal_code).toEqual(undefined);
	})


	it("Returns true if Email is valid", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_email = "jeremy@kwmassage.com"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_email).toEqual(undefined);
	})

	it("Returns false if Email has no @", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_email = "jeremykwmassage.com"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_email).toEqual("Email must be valid");
	})	

	it("Returns false if Email has no .", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_email = "jeremy@kwmassagecom"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_email).toEqual("Email must be valid");
	})	

	it("Returns true if DOB year is valid", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_1i = "1976"
		action.newFormData.hh_form_date_of_birth_2i = "12"
		action.newFormData.hh_form_date_of_birth_3i = "20"
		
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual(undefined);
	})

	it("Returns false if DOB year is greater than presant year", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_1i = "2020"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, year must be valid");
	})

	it("Returns false if DOB year is less than presant year", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_1i = "1890"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, year must be valid");
	})
	
	it("Returns false if DOB year not a numbetr", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_1i = "Bacon"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, year must be valid");
	})	

	//

	it("Returns false if DOB month is greater than 12", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_2i = "13"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, month must be valid");
	})

	it("Returns false if DOB month is less than 1", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_2i = "0"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, month must be valid");
	})
	it("Returns false if DOB month is negitive", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_2i = "-5"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, month must be valid");
	})
		
	it("Returns false if DOB month not a numbetr", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_2i = "Bacon"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, month must be valid");
	})	

	it("Returns false if DOB day is greater than presant day", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_3i = "32"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, day must be valid");
	})

	it("Returns false if DOB day is less than presant day", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_3i = "0"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, day must be valid");
	})
	
	it("Returns false if DOB day is negitive", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_3i = "-16"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, day must be valid");
	})

	it("Returns false if DOB day not a numbetr", function() {
		var action = {
			action: "next",
			newFormData: actionSetUp
		}
		action.newFormData.hh_form_date_of_birth_3i = "Bacon"
		kwMassageHealthHistory.contactState.update(action);

		expect(kwMassageHealthHistory.contactState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.contactState.errorMessages.hh_form_date_of_birth).toEqual("Date Of Birth, day must be valid");
	})		
})