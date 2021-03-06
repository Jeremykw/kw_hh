describe("Health History Form Navagation", function() {
	navigationState = new formModel.baseState();	
  	 
    beforeEach(function() {	
		spyOn(formModel.validate, "isFormValid").and.returnValue(true);
	})
	
	it("initNavigationState responds with new state current page 1 with 'next action' and last page to 0", function() {
		var action = {action: "next"};
		navigationState.update(action);
		expect(navigationState.currentPage).toEqual(1);
		expect(navigationState.lastPage).toEqual(0);
	})

	it("on next changes state.currentPage from 1 to 2 and lastPage to 1", function() {
		var action = {action: "next"};
		navigationState.update(action);
		expect(navigationState.lastPage).toEqual(1);
		expect(navigationState.currentPage).toEqual(2);
	})

	it("on next changes state.currentPage from 2 to 3 and lastPage to 2", function() {
		var action = {action: "next"};
		navigationState.update(action);
		expect(navigationState.lastPage).toEqual(2);
		expect(navigationState.currentPage).toEqual(3);
	})

	it("on back changes state.currentPage from 3 to 2 and lastPage to 3", function() {
		var action = {action: "back"};
	
		navigationState.update(action);
		expect(navigationState.lastPage).toEqual(3);
		expect(navigationState.currentPage).toEqual(2);
	})

	it("on back changes state.currentPage from 2 to 1 and lastPage to 2", function() {
		var action = {action: "back"};
	
		navigationState.update(action);
		expect(navigationState.lastPage).toEqual(2);
		expect(navigationState.currentPage).toEqual(1);
	})

})
