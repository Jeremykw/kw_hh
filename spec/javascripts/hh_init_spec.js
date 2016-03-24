describe("init state", function() {
  
  var initState = new kwMassageHealthHistory.hHrun({}, {action: "init"});
  // var currentPageForm, lastPageForm;

  it("should set lastPage and currentPage to 0 on init", function() {
    expect(initState.lastPage).toEqual(0);
    expect(initState.currentPage).toEqual(0);
  })
  
  it("should respond with {} to all form calls", function() {
    expect(initState.contactForm).toEqual({ isValid: true });
    expect(initState.complaintsForm).toEqual({ isValid: true });
    expect(initState.checkboxesForm).toEqual({ isValid: true });
    expect(initState.painsForm).toEqual({ isValid: true });
    expect(initState.otherForm).toEqual({ isValid: true });
    expect(initState.concentForm).toEqual({ isValid: true });
  })

  it("should respond with true to isValid", function() {
    expect(initState.isStateValid).toEqual(true);
  })
  

})