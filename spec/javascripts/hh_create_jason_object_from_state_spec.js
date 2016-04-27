describe("Health History create json", function() {
	beforeEach(function(){
		kwMassageHealthHistory.createJsonForm = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.createJsonForm.lastPage = 1;
		kwMassageHealthHistory.createJsonForm.currentPage = 2;
		kwMassageHealthHistory.createJsonForm.contactForm = { 
			hh_form_first_name: "jeremy", 
			hh_form_last_name: "bissonnette", 
			hh_form_email: "jeremy@kwmassage.com", 
			hh_form_phone: "5197454112" 
		};
		kwMassageHealthHistory.createJsonForm.concentForm = { 
				hh_form_confirm_name: "jeremy bissonnette", 
				hh_form_confirm_email: "jeremy@kwmassage.com" 
			};
	})
	var validForm = {
		hh_form:{
			first_name: "jeremy", 
			last_name: "bissonnette", 
			email: "jeremy@kwmassage.com", 
			phone: "5197454112", 
			confirm_name: "jeremy bissonnette", 
			confirm_email: "jeremy@kwmassage.com" 
	
		}
	}

	it("returns formated json form for rails", function() {

		var form = kwMassageHealthHistory.createJsonForm.createJsonObjectFromState();
		expect(form).toEqual(validForm);
	})
})