describe("init state", function() {
  
  var initState = new hHrun({}, {action: "init"});
  var currentPageForm, lastPageForm;

  it("should set lastPage to 0 on init", function() {
    expect(initState.lastPage).toEqual(0);
  });
  
  it("should respond with {} to hhform.formData", function() {
    expect(initState.form).toEqual({});
  });
 })
  
//   it("should save data from contact form and switch page to 1, on next", function() {
//     var action = {
//       action: "next", 
//       newFormData: {hh_form_first_name: "jeremy", 
//                     hh_form_last_name: "Bissonnette" }
//     }
//     currentPageForm = new hhForm(initForm, action);
//     expect(currentPageForm.formData).toEqual({ hh_form_first_name: "jeremy", 
//                                                hh_form_last_name: "Bissonnette" });
//     expect(currentPageForm.page).toEqual(1);
//   });
  
//   it("should add data from complaints form and switch page to 2, next", function() {
//     var action = {
//       action: "next", 
//       newFormData: { hh_form_primary_complaint: "itchy ass", 
//                      hh_form_secondary_complaint: "" }
//     }
//     lastPageForm = currentPageForm;
//     currentPageForm = new hhForm(lastPageForm, action);
//     expect(currentPageForm.formData).toEqual({ hh_form_first_name: "jeremy", 
//                                                hh_form_last_name: "Bissonnette", 
//                                                hh_form_primary_complaint: "itchy ass", 
//                                                hh_form_secondary_complaint: "" });
//     expect(currentPageForm.page).toEqual(2);
//   });
  