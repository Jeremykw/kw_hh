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

	it("returns inValid if hh_form_loss_of_sensation is longer than 500 characters", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_loss_of_sensation = "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
		kwMassageHealthHistory.checkboxesState.update(action);
		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_loss_of_sensation).toEqual("Loss Of Sensation must be less than 500 characters");
	})

	it("returns Valid if hh_form_asthma true", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_asthma = true;
		kwMassageHealthHistory.checkboxesState.update(action);
		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_asthma).toEqual(undefined);
	})

	it("returns Valid if hh_form_asthma false", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_asthma = false;
		kwMassageHealthHistory.checkboxesState.update(action);
		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_asthma).toEqual(undefined);
	})

	it("returns inValid if hh_form_asthma a string", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_asthma = "Anything other than boolean";
		kwMassageHealthHistory.checkboxesState.update(action);
		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_asthma).toEqual("Don't be an asshole");
	})

	//diabetes_onset

	it("Returns true if diabetes_onset year is valid", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_1i = "1976";
		action.newFormData.hh_form_diabetes_onset_2i = "12";
		action.newFormData.hh_form_diabetes_onset_3i = "20";
		
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual(undefined);
	})

	it("Returns false if diabetes_onset year is greater than presant year", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_1i = "2020";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, year must be valid");
	})

	it("Returns false if diabetes_onset year is less than presant year", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_1i = "1890";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, year must be valid");
	})
	
	it("Returns false if diabetes_onset year not a number", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_1i = "Bacon";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, year must be valid");
	})	

	//

	it("Returns false if diabetes_onset month is greater than 12", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_2i = "13";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, month must be valid");
	})

	it("Returns false if diabetes_onset month is less than 1", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_2i = "0";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, month must be valid");
	})
	it("Returns false if diabetes_onset month is negitive", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_2i = "-5";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, month must be valid");
	})
		
	it("Returns false if diabetes_onset month not a numbetr", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_2i = "Bacon";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, month must be valid");
	})	

	it("Returns false if diabetes_onset day is greater than presant day", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_3i = "32";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, day must be valid");
	})

	it("Returns false if diabetes_onset day is less than presant day", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_3i = "0";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, day must be valid");
	})
	
	it("Returns false if diabetes_onset day is negitive", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_3i = "-16";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, day must be valid");
	})

	it("Returns false if diabetes_onset day not a number", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_diabetes_onset_3i = "Bacon";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_diabetes_onset).toEqual("Diabetes Onset, day must be valid");
	})	
	// pregnancy due_date
	it("Returns true if pregnant_due_date is valid", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_1i = "2016";
		action.newFormData.hh_form_pregnant_due_date_2i = "10";
		action.newFormData.hh_form_pregnant_due_date_3i = "20";
		
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(true);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual(undefined);
	})

	it("Returns false if pregnant_due_date year is less than presant year", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_1i = "2015";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, year must be valid");
	})

	it("Returns false if pregnant_due_date year is less than presant year", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_1i = "1976";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, year must be valid");
	})
	
	it("Returns false if pregnant_due_date year not a number", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_1i = "Bacon"
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, year must be valid");
	})	

	//

	it("Returns false if pregnant_due_date month is greater than 12", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_2i = "13";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, month must be valid");
	})

	it("Returns false if pregnant_due_date month is less than 1", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_2i = "0";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, month must be valid");
	})
	it("Returns false if pregnant_due_date month is negitive", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_2i = "-5";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, month must be valid");
	})
		
	it("Returns false if pregnant_due_date month not a number", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_2i = "Bacon";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, month must be valid");
	})	

	it("Returns false if pregnant_due_date day is greater 31", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_3i = "32";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})

	it("Returns false if pregnant_due_date day is less 1", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_3i = "0";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})
	
	it("Returns false if pregnant_due_date day is negitive", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_3i = "-16";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})

	it("Returns false if pregnant_due_date day not a number", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_3i = "Bacon";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})	
	
	it("Returns false if pregnant_due_date is greater than 10 months away", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		action.newFormData.hh_form_pregnant_due_date_1i = "2017";
		action.newFormData.hh_form_pregnant_due_date_2i = "02";
		action.newFormData.hh_form_pregnant_due_date_3i = "15";
		action.newFormData.pregnant = "1";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})
	
	it("Returns false if pregnant_due_date is today", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		var today = new Date()
		action.newFormData.hh_form_pregnant_due_date_1i = today.getFullYear();
		action.newFormData.hh_form_pregnant_due_date_2i = today.getMonth();
		action.newFormData.hh_form_pregnant_due_date_3i = today.getDay();
		action.newFormData.pregnant = "1";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})	
	
	it("Returns false if pregnant_due_date is yesterday", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		var today = new Date()
		var yesterday = new Date(today.setDate( today.getDate() - 1 )) 
		action.newFormData.hh_form_pregnant_due_date_1i = yesterday.getFullYear();
		action.newFormData.hh_form_pregnant_due_date_2i = yesterday.getMonth();
		action.newFormData.hh_form_pregnant_due_date_3i = yesterday.getDay();
		action.newFormData.pregnant = "1";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})
	
	it("Returns false if pregnant_due_date is last month", function() {
		var action = {
			action: "next",
			newFormData: checkboxesSetUp
		}
		var today = new Date()
		var yesterday = new Date(today.setMonth( today.getMonth() - 1 )) 
		action.newFormData.hh_form_pregnant_due_date_1i = yesterday.getFullYear();
		action.newFormData.hh_form_pregnant_due_date_2i = yesterday.getMonth();
		action.newFormData.hh_form_pregnant_due_date_3i = new Date().getDay();
		action.newFormData.pregnant = "1";
		kwMassageHealthHistory.checkboxesState.update(action);

		expect(kwMassageHealthHistory.checkboxesState.isValid).toEqual(false);
		expect(kwMassageHealthHistory.checkboxesState.errorMessages.hh_form_pregnant_due_date).toEqual("Pregnant Due Date, day must be valid");
	})
})