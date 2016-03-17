describe("init state", function() {
  
  var initState = new hHrun({}, {action: "init"});
  // var currentPageForm, lastPageForm;

  it("should set lastPage to 0 on init", function() {
    expect(initState.lastPage).toEqual(0);
    expect(initState.currentPage).toEqual(0);
  })
  
  it("should respond with {} to hhform.formData", function() {
    expect(initState.formData).toEqual({});
  })
  
 })