describe("Health History Form Navagation", function() {
  var initState = new hHrun({}, {action: "init"});
  
  var currentPageForm, lastPageForm;
  
  it("initState responds with new state current page 1 with 'next action'", function() {
  	var action = "next"
  	var state = hHrun(initState, action)
    expect(initForm.formData).toEqual({});
  })

})
  