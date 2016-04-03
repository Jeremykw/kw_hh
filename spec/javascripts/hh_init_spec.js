describe("init state", function() {
  
  var initState = new kwMassageHealthHistory.hHrun({}, {action: "init"});
  // var currentPageForm, lastPageForm;

  it("should set lastPage and currentPage to 0 on init", function() {
    expect(initState.lastPage).toEqual(0);
    expect(initState.currentPage).toEqual(0);
  })
  
  it("should respond with {} to all form calls", function() {
    expect(initState.contactForm.isValid).toEqual(true);
    expect(initState.complaintsForm.isValid).toEqual(true`);
    expect(initState.checkboxesForm.isValid).toEqual(true`);
    expect(initState.painsForm.isValid).toEqual(true`);
    expect(initState.otherForm.isValid).toEqual(true`);
    expect(initState.concentForm.isValid).toEqual(true`);
  })

  it("should respond with true to isValid", function() {
    expect(initState.isStateValid).toEqual(true);
  })
  

})