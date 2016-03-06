describe("HealthHistoryForm", function() {
  it("to set page to 0 on init action", function() {
    var oldHH = new hhForm({}, {action: "init"})
    expect(oldHH.page).toEqual(0);
  });
  it("to have a getFormDate method", function() {
    var oldHH = new hhForm({}, {action: "init"})
    expect(getFormData()).toEqual(0);
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
});