var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.complaintsForm = {
	
	domManipulation: function(){
		
	},
	errors: function(form){
		return kwMassageHealthHistory.validate.mergeObjects(
			kwMassageHealthHistory.validate.validateLengthOf([
				"primary_complaint",
				"secondary_complaint",
				"sports",
				"previous_massage_note"
			], 500, form),
			kwMassageHealthHistory.validate.validatePresenceOf([
				"primary_complaint"
			], form),
			kwMassageHealthHistory.validate.validateBoolean([
				"smoke"
			], form)
		)
	}
}