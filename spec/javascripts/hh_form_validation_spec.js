describe("Health History Form Validation", function() {
  
  var initForm = new hhForm({}, {action: "init"});
  var currentPageForm, lastPageForm;

  it("should respond to isValid", function() {
    expect(initForm.isValid).toBeDefined();
  });

  // it("isValid should return false if hh_form_first_name is blank", function() {
  //   expect(initForm.isValid).toBeDefined();
  // });

});
