describe("Health History init state", function() {
	var intiState = new formModel.baseState();	
	// var initState = kwMassageHealthHistory.hHrun(intiState, {});
  
	var currentPageForm, lastPageForm;

	it("should set lastPage and currentPage to 0 on init", function() {
	expect(intiState.lastPage).toEqual(0);
	expect(intiState.currentPage).toEqual(0);
	})

	it("should respond with true to isValid", function() {
	  expect(intiState.isValid).toEqual(true);

	})

	it("should respond with {} to all form calls", function() {
	  expect(intiState.contactForm).toEqual({});
	  expect(intiState.complaintsForm).toEqual({});
	  expect(intiState.checkboxesForm).toEqual({});
	  expect(intiState.painsForm).toEqual({});
	  expect(intiState.otherForm).toEqual({});
	  expect(intiState.concentForm).toEqual({});

	})
		
})