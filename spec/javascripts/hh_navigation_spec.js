describe("Health History Form Navagation", function() {
	var initState = new hHrun({}, {action: "init"});

	var currentState, lastState;

	it("initState responds with new state current page 1 with 'next action' and last page to 0", function() {
		var action = {action: "next"};
		currentState = new hHrun(initState, action);
		expect(currentState.currentPage).toEqual(1);
		expect(currentState.lastPage).toEqual(0);
	})

	it("on next changes state.currentPage from 1 to 2 and lastPage to 1", function() {
		var action = {action: "next"};
		lastState = currentState;
		currentState = new hHrun(lastState, action);
		expect(currentState.lastPage).toEqual(1);
		expect(currentState.currentPage).toEqual(2);
	})

	it("on next changes state.currentPage from 2 to 3 and lastPage to 2", function() {
		var action = {action: "next"};
		lastState = currentState;
		currentState = new hHrun(lastState, action);
		expect(currentState.lastPage).toEqual(2);
		expect(currentState.currentPage).toEqual(3);
	})

	it("on back changes state.currentPage from 3 to 2 and lastPage to 3", function() {
		var action = {action: "back"};
		lastState = currentState;
		currentState = new hHrun(lastState, action);
		expect(currentState.lastPage).toEqual(3);
		expect(currentState.currentPage).toEqual(2);
	})

	it("on back changes state.currentPage from 2 to 1 and lastPage to 2", function() {
		var action = {action: "back"};
		lastState = currentState;
		currentState = new hHrun(lastState, action);
		expect(currentState.lastPage).toEqual(2);
		expect(currentState.currentPage).toEqual(1);
	})

})
