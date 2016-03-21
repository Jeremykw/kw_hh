// describe("Health History Form Navagation and Save", function() {
  
//   var initForm = new hhForm({}, {action: "init"});
//   var currentPageForm, lastPageForm;
  
//   it("should respond with {} to hhform.formData", function() {
//     expect(initForm.formData).toEqual({});
//   });
  
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
  
//   it("should add data from checkbox form and switch page to 3, next", function() {
//     var action = {
//       action: "next", 
//       newFormData: { hh_form_cchf: 1, 
//                      hh_form_skin_condition: 0, 
//                      hh_form_diabetes: 0, 
//                      hh_form_digestive_conditions: 1 }
//     }
//     lastPageForm = currentPageForm;
//     currentPageForm = new hhForm(lastPageForm, action);
//     expect(currentPageForm.formData).toEqual({ hh_form_first_name: "jeremy", 
//                                                hh_form_last_name: "Bissonnette", 
//                                                hh_form_primary_complaint: "itchy ass", 
//                                                hh_form_secondary_complaint: "", 
//                                                hh_form_cchf: 1, 
//                                                hh_form_skin_condition: 0, 
//                                                hh_form_diabetes: 0, 
//                                                hh_form_digestive_conditions: 1 });
//     expect(currentPageForm.page).toEqual(3);
//   });

//   it("should add data from pains form and switch page to 2, on back", function() {
//     var action = {
//       action: "back", 
//       newFormData: { hh_form_neck: 1, 
//                      hh_form_neck_notes: "My neck is sore", 
//                      hh_form_legs: 1, 
//                      hh_form_legs_notes: "sore are my legs" }
//     }
//     lastPageForm = currentPageForm;
//     currentPageForm = new hhForm(lastPageForm, action);
//     expect(currentPageForm.formData).toEqual({ hh_form_first_name: "jeremy", 
//                                                hh_form_last_name: "Bissonnette", 
//                                                hh_form_primary_complaint: "itchy ass", 
//                                                hh_form_secondary_complaint: "", 
//                                                hh_form_cchf: 1, 
//                                                hh_form_skin_condition: 0, 
//                                                hh_form_diabetes: 0, 
//                                                hh_form_digestive_conditions: 1,
//                                                hh_form_neck: 1, 
//                                                hh_form_neck_notes: "My neck is sore", 
//                                                hh_form_legs: 1, 
//                                                hh_form_legs_notes: "sore are my legs" 
//                                              });
//     expect(currentPageForm.page).toEqual(2);
//   });

//   it("should add data from checkboxes form and switch page to 1, on back", function() {
//     var action = {
//       action: "back", 
//       newFormData: { hh_form_cchf: 0, 
//                      hh_form_skin_condition: 1, 
//                      hh_form_diabetes: 0, 
//                      hh_form_digestive_conditions: 1,
//                      hh_form_hiv: 1
//                    }
//                   }
//     lastPageForm = currentPageForm;
//     currentPageForm = new hhForm(lastPageForm, action);
//     expect(currentPageForm.formData).toEqual({ hh_form_first_name: "jeremy", 
//                                                hh_form_last_name: "Bissonnette", 
//                                                hh_form_primary_complaint: "itchy ass", 
//                                                hh_form_secondary_complaint: "", 
//                                                hh_form_cchf: 0, 
//                                                hh_form_skin_condition: 1, 
//                                                hh_form_diabetes: 0, 
//                                                hh_form_digestive_conditions: 1,
//                                                hh_form_neck: 1, 
//                                                hh_form_neck_notes: "My neck is sore", 
//                                                hh_form_legs: 1, 
//                                                hh_form_legs_notes: "sore are my legs",
//                                                hh_form_hiv: 1
//                                              })
//     expect(currentPageForm.page).toEqual(1);
//   });


// });




//   // it("validates based on mod 10", function() {
//   //   expect(CreditCard.validNumber("4111 1111-11111111")).toBeTruthy();
//   //   expect(CreditCard.validNumber("4111111111111121")).toBeFalsy();
//   // });
  
//   // it("validates when text field loses focus", function() {
//   //   loadFixtures("order_form.html");
//   //   $("#card_number").validateCreditCardNumber();
//   //   $("#card_number").val("123");
//   //   $("#card_number").blur();
//   //   expect($("#card_number_error")).toHaveText("Invalid credit card number.");
//   //   $("#card_number").val("4111 1111-11111111");
//   //   $("#card_number").blur();
//   //   expect($("#card_number_error")).toHaveText("");
})