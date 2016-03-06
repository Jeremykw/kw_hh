describe("HealthHistoryForm", function() {
  it("should set page to 0 on init action", function() {
    var oldHH = new hhForm({}, {action: "init"})
    expect(oldHH.page).toEqual(0);
  });
  
  it("should respond to hhform.formData", function() {
    var oldHH = new hhForm({}, {action: "init"})
    expect(oldHH.formData).toEqual({});
  });
  
  it("should save data from first form section", function() {
    var currentForm = new hhForm({}, {action: "init"})
    var action = {
      action: "next", 
      newFormData: {hh_form_first_name: "jeremy", hh_form_last_name: "Bissonnette" }
    }
    var newForm = new hhForm(currentForm, action);

    expect(newForm.formData).toEqual({hh_form_first_name: "jeremy", hh_form_last_name: "Bissonnette"});
  });
  
  it("should add data from second form to first", function() {
    var action = {
      action: "next", 
      newFormData: { hh_form_primary_complaint: "itchy ass", hh_form_secondary_complaint: "" }
    }
    var currentForm = {page: 1, formData: {hh_form_first_name: "jeremy", hh_form_last_name: "Bissonnette" } };
    var newForm = new hhForm(currentForm, action);

    expect(newForm.formData).toEqual({ hh_form_first_name: "jeremy", hh_form_last_name: "Bissonnette", hh_form_primary_complaint: "itchy ass", hh_form_secondary_complaint: "" });
  });
  
});




  // it("validates based on mod 10", function() {
  //   expect(CreditCard.validNumber("4111 1111-11111111")).toBeTruthy();
  //   expect(CreditCard.validNumber("4111111111111121")).toBeFalsy();
  // });
  
  // it("validates when text field loses focus", function() {
  //   loadFixtures("order_form.html");
  //   $("#card_number").validateCreditCardNumber();
  //   $("#card_number").val("123");
  //   $("#card_number").blur();
  //   expect($("#card_number_error")).toHaveText("Invalid credit card number.");
  //   $("#card_number").val("4111 1111-11111111");
  //   $("#card_number").blur();
  //   expect($("#card_number_error")).toHaveText("");
  // });