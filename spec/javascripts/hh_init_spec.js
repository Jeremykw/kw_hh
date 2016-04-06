describe("Health History init state", function() {
	kwMassageHealthHistory.hhState = new kwMassageHealthHistory.baseState();	
	// var initState = kwMassageHealthHistory.hHrun(kwMassageHealthHistory.hhState, {});
  
	var currentPageForm, lastPageForm;

	it("should set lastPage and currentPage to 0 on init", function() {
	expect(kwMassageHealthHistory.hhState.lastPage).toEqual(0);
	expect(kwMassageHealthHistory.hhState.currentPage).toEqual(0);
	})

	it("should respond with true to isValid", function() {
	  expect(kwMassageHealthHistory.hhState.isValid).toEqual(true);

	})

	it("should respond with {} to all form calls", function() {
	  expect(kwMassageHealthHistory.hhState.contactForm).toEqual({});
	  expect(kwMassageHealthHistory.hhState.complaintsForm).toEqual({});
	  expect(kwMassageHealthHistory.hhState.checkboxesForm).toEqual({});
	  expect(kwMassageHealthHistory.hhState.painsForm).toEqual({});
	  expect(kwMassageHealthHistory.hhState.otherForm).toEqual({});
	  expect(kwMassageHealthHistory.hhState.concentForm).toEqual({});

	})
		
})