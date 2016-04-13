var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.validate = {
	
	_yearIsInvalid: function(year, today){
		return ( year > today.getFullYear() - 1 || year < today.getFullYear() - 120 || isNaN(year) );
	},
	_monthIsInvalid: function(month){
		return ( month > 12 || month < 1 || isNaN(month) );
	},
	_dayIsInvalid: function(day){
		return ( day > 31 || day < 1 || isNaN(day) );
	},
	validateDate: function(dateField, form){
		var dobErrors  = {};
		var today      = new Date();
		var yearField  = "hh_form_" + dateField + "_1i";
		var monthField = "hh_form_" + dateField + "_2i";
		var dayField   = "hh_form_" + dateField + "_3i";
		if ( form && form[yearField] ){
			var year  = parseInt(form[yearField], 10);
			if ( this._yearIsInvalid(year, today) ){
				dobErrors["hh_form_" + dateField] = dateField.replace(/_/g, ' ').toLowerCase().capitalize() + ", year must be valid";
			}
		}
		if ( form && form[monthField] ){
			var month = parseInt(form[monthField])
			if ( this._monthIsInvalid(month) ){
				dobErrors["hh_form_" + dateField] = dateField.replace(/_/g, ' ').toLowerCase().capitalize() + ", month must be valid";
			}
		}
		if ( form && form[dayField] ){
			var day   = parseInt(form[dayField])
			if ( this._dayIsInvalid(day) ){
				dobErrors["hh_form_" + dateField] = dateField.replace(/_/g, ' ').toLowerCase().capitalize() + ", day must be valid";
			}
		}
		return dobErrors;
	},	
	validateEmail: function(form){
		var emailErrors = {};
		if ( form && form["hh_form_email"] ){
			var reg = /.+@.+\..+/;
			if ( !(reg.test(form["hh_form_email"]))  ){
				emailErrors["hh_form_email"] = "Email must be valid";
			}
		}
		return emailErrors;
	},	
	validatePostalCode: function(form){
		var postalCodeErrors = {};
		if ( form && form["hh_form_postal_code"] ){
			var reg = /[a-z, A-Z][0-9][a-z, A-Z]\ ?[0-9][a-z, A-Z][0-9]/;
			if ( !(reg.test(form["hh_form_postal_code"]))  ){
				postalCodeErrors["hh_form_postal_code"] = "Postal Code Must be in the H0H 0H0 format";
			}
		}
		return postalCodeErrors;
	},
	validatePhoneNumber: function(form){
		var phoneErrors = {};
		if ( form && form["hh_form_phone"] ){
			var reg = /\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{4}/;
			if ( !(reg.test(form["hh_form_phone"]))  ){
				phoneErrors["hh_form_phone"] = "Phone Must be in the xxx-xxx-xxxx format";
			}
		}
		return phoneErrors;
	},

	validateBoolean: function(fieldsArray, form){
		var boolErrors = {};
		if ( form ){
			for (var field in fieldsArray) {
				var testField = "hh_form_" + fieldsArray[field];
				if ( form[testField] && !(form[testField] == true || form[testField] == false) ){
					boolErrors["hh_form_" + fieldsArray[field]] = "Don't be an asshole";
				}
			}
		}
		return boolErrors;
	},

	validatePresenceOf: function(fieldsArray, form){
		var presanceErrors = {};
		if ( form ){
			for (var field in fieldsArray) {
				var testField = "hh_form_" + fieldsArray[field];
				if ( !form[testField] ){
					presanceErrors["hh_form_" + fieldsArray[field]] = 
						fieldsArray[field].replace(/_/g, ' ').toLowerCase().capitalize() + 
						" Must Be Present";
				}
			}
		}
		return presanceErrors;
	},
	
	validateLengthOf: function(fieldsArray, maxLength, form){
		var lengthErrors = {};
		if ( form ){
			for (var field in fieldsArray) {
				var testField = "hh_form_" + fieldsArray[field];
				if ( form[testField] && form[testField].length > maxLength ){
					lengthErrors["hh_form_" + fieldsArray[field]] = 
						fieldsArray[field].replace(/_/g, ' ').toLowerCase().capitalize() + // capitalization needs to be fixed
						" must be less than " + maxLength + 
						" characters";
				}
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
		if ( errorMessages ){
			if( Object.keys(errorMessages).length > 0 ){
				return false;
			}else{
				return true;
			}
		}
	},
}
String.prototype.capitalize = function(){
   return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
}