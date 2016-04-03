var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.validate = {

	validatePresenceOf: function(fieldsArray, form){
		var presanceErrors = {};
		for (var field in fieldsArray) {
			var testField = "hh_form_" + fieldsArray[field];
			if ( !form[testField] ){
				presanceErrors["hh_form_" + fieldsArray[field]] = 
					fieldsArray[field].replace(/_/g, ' ').toLowerCase().capitalize() + 
					" Must Be Present";
			}
		}
		return presanceErrors;
	},
	
	validateLengthOf: function(fieldsArray, maxLength, form){
		var lengthErrors = {};
		for (var field in fieldsArray) {
			var testField = "hh_form_" + fieldsArray[field];
			if ( form[testField] && form[testField].length > maxLength ){
				lengthErrors["hh_form_" + fieldsArray[field]] = 
					fieldsArray[field].replace(/_/g, ' ').toLowerCase().capitalize() + // capitalization needs to be fixed
					" must be less than " + maxLength + 
					" characters";
			}
		}
		return lengthErrors;
	},

	mergeErrors: function(){
		var errors = {};
		for ( i = 0; i < arguments.length; i ++){
			for ( errorr in arguments[i]){
				errors[errorr] = arguments[i][errorr];
			}
		}
		return errors;
	},

	isFormValid: function(errorMessages){
		if( Object.keys(errorMessages).length > 0 ){
			return false;
		}else{
			return true;
		}

	},

}
String.prototype.capitalize = function(){
   return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
}