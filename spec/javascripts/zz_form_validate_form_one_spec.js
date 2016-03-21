// describe("validateAction Form ONE", function() {
  
// 	var initForm = new hhForm({}, {action: "init"});
// 	var actionZero = {
// 		action: "next", 
// 		newFormData: {hh_form_first_name: "Jeremy", 
// 	                hh_form_last_name: "Bissonnette",
// 	                hh_form_email: "jeremy@kwmassage",
// 	                hh_form_phone: "5197454112" }
// 	    }
// 	var pageZero = new hhForm(initForm, actionZero)
    
//     var actionSetUp;
//     beforeEach(function() {
// 		actionSetUp = {
// 			hh_form_primary_complaint: "pain in ass", 
//             hh_form_secondary_complaint: "itchy but",
//             hh_form_sports: "rock climbing",
//             hh_form_smoke: true
// 		    }
// 		}
// 	);  

// 	it("should return false and add error message if hh_form_primary_complaint is > 25", function() {
// 		var action = {
// 			action: "next", 
// 			newFormData: actionSetUp
// 		}
// 		action.newFormData["hh_form_primary_complaint"] = "qwertyuioplkjhgfdsazxcvbnm";

// 		validAction = new actionValidation(pageZero, action)
// 		expect(validAction.isValid).toEqual(false);
// 		//  capitalizatrion of this message needs to be fixed
// 		expect(validAction.errorMessages.hh_form_primary_complaint).toEqual("primary complaint must be less than 25 characters");

// 	})

// 	it("should return false and add error message if hh_form_primary_complaint is blank", function() {
// 		var action = {
// 			action: "next", 
// 			newFormData: actionSetUp
// 		}
// 		action.newFormData["hh_form_primary_complaint"] = "";

// 		validAction = new actionValidation(pageZero, action)
// 		expect(validAction.isValid).toEqual(false);
// 		expect(validAction.errorMessages.hh_form_primary_complaint).toEqual("Primary Complaint Must Be Present");
// 	})


// })