describe("init state", function() {
	kwMassageHealthHistory.hhState = new kwMassageHealthHistory.baseState();	
	var initState = kwMassageHealthHistory.hHrun(kwMassageHealthHistory.hhState, {});
  
	var currentPageForm, lastPageForm;

	it("should set lastPage and currentPage to 0 on init", function() {
	expect(initState.lastPage).toEqual(0);
	expect(initState.currentPage).toEqual(0);
	})

	it("should respond with true to isValid", function() {
	  expect(initState.isValid).toEqual(true);

	})

	it("should respond with {} to all form calls", function() {
	  expect(initState.contactForm).toEqual({});
	  expect(initState.complaintsForm).toEqual({});
	  expect(initState.checkboxesForm).toEqual({});
	  expect(initState.painsForm).toEqual({});
	  expect(initState.otherForm).toEqual({});
	  expect(initState.concentForm).toEqual({});

	})
		
})