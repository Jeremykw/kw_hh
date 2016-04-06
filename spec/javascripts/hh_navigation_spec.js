describe("Health History Form Navagation", function() {
	kwMassageHealthHistory.hhState = new kwMassageHealthHistory.baseState();	
	var initNavigationState = kwMassageHealthHistory.hHrun(kwMassageHealthHistory.hhState, {});
  
	var currentNavigationState, lastNavigationState;
    beforeEach(function() {	
	spyOn(kwMassageHealthHistory.hhState, "isValid").and.returnValue(true);
	}
	
	it("initNavigationState responds with new state current page 1 with 'next action' and last page to 0", function() {
		var action = {action: "next"};
		currentNavigationState = kwMassageHealthHistory.hHrun(initNavigationState, action);
		expect(currentNavigationState.currentPage).toEqual(1);
		expect(currentNavigationState.lastPage).toEqual(0);
	})

	it("on next changes state.currentPage from 1 to 2 and lastPage to 1", function() {
		var action = {action: "next"};
		lastNavigationState = currentNavigationState;
		currentNavigationState = kwMassageHealthHistory.hHrun(lastNavigationState, action);
		expect(currentNavigationState.lastPage).toEqual(1);
		expect(currentNavigationState.currentPage).toEqual(2);
	})

	it("on next changes state.currentPage from 2 to 3 and lastPage to 2", function() {
		var action = {action: "next"};
		lastNavigationState = currentNavigationState;
		currentNavigationState = kwMassageHealthHistory.hHrun(lastNavigationState, action);
		expect(currentNavigationState.lastPage).toEqual(2);
		expect(currentNavigationState.currentPage).toEqual(3);
	})

	it("on back changes state.currentPage from 3 to 2 and lastPage to 3", function() {
		var action = {action: "back"};
		lastNavigationState = currentNavigationState;
		currentNavigationState = kwMassageHealthHistory.hHrun(lastNavigationState, action);
		expect(currentNavigationState.lastPage).toEqual(3);
		expect(currentNavigationState.currentPage).toEqual(2);
	})

	it("on back changes state.currentPage from 2 to 1 and lastPage to 2", function() {
		var action = {action: "back"};
		lastNavigationState = currentNavigationState;
		currentNavigationState = kwMassageHealthHistory.hHrun(lastNavigationState, action);
		expect(currentNavigationState.lastPage).toEqual(2);
		expect(currentNavigationState.currentPage).toEqual(1);
	})

})
