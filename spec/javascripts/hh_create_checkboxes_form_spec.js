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
	
})