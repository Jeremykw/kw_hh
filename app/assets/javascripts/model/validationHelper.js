var formModel = formModel || {};

formModel.validate = {

	validateConfirmName: function(form, state){
		var confirmNameErrors = {};
		if ( form && form["hh_form_confirm_name"] ){
			var confirmName = form["hh_form_confirm_name"].toLowerCase();
			var name = state.contactForm.hh_form_first_name.toLowerCase() + " " + state.contactForm.hh_form_last_name.toLowerCase();
			if ( name !== confirmName ){
				confirmNameErrors["hh_form_confirm_name"] = "Confirm Name must be equal to First Name plus Last Name";
			}
		}
		return confirmNameErrors;
		// return true;
	},
	validateConfirmEmail: function(form, state){
		var confirmEmailErrors = {};
		if ( form && form["hh_form_confirm_email"] ){
			var confirmEmail = form["hh_form_confirm_email"].toLowerCase();
			var email = state.contactForm.hh_form_email.toLowerCase();
			if ( email !== confirmEmail ){
				confirmEmailErrors["hh_form_confirm_email"] = "Confirm Email must match Email";
			}
		}
		return confirmEmailErrors;
		// return true;
	},
	validateDate: function(dateField, form){
		var dobErrors  = {};
		var yearField  = "hh_form_" + dateField + "_1i";
		var monthField = "hh_form_" + dateField + "_2i";
		var dayField   = "hh_form_" + dateField + "_3i";
		if ( form && form[yearField] ){
			var year  = parseInt(form[yearField], 10);
			if ( this._yearIsInvalid(dateField, year) ){
				dobErrors["hh_form_" + dateField] = this._formatErrorField(dateField) + ", year must be valid";
			}
		}
		if ( form && form[monthField] ){
			var month = parseInt(form[monthField])
			if ( this._monthIsInvalid(dateField, month) ){
				dobErrors["hh_form_" + dateField] = this._formatErrorField(dateField) + ", month must be valid";
			}
		}
		if ( form && form[dayField] ){
			var day   = parseInt(form[dayField])
			if ( this._dayIsInvalid(dateField, day) ){
				dobErrors["hh_form_" + dateField] = this._formatErrorField(dateField) + ", day must be valid";
			}
		}
		if ( form && dateField === "pregnant_due_date" && form["pregnant"] == true ){
			var date = new Date( form[yearField] + "-" + form[monthField] + "-" + form[dayField] ).getTime();
			var tenMonthsAway = new Date(new Date().setMonth(new Date().getMonth() + 8 )).getTime();
			if ( date > tenMonthsAway || date <= new Date().getTime() ){
				dobErrors["hh_form_" + dateField] = this._formatErrorField(dateField) + ", day must be valid";
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
						this._formatErrorField(fieldsArray[field]) + // capitalization needs to be fixed
						" must be less than " + maxLength + 
						" characters";
				}
			}
		}
		return lengthErrors;
	},
	mergeObjects: function(){
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
	_formatErrorField: function(field){
		return field.replace(/_/g, ' ').toLowerCase().capitalize();
	},
	_yearIsInvalid: function(field, year){
		if ( field === "pregnant_due_date" ){
			return ( year < new Date().getFullYear() || year > new Date().getFullYear() + 1 || isNaN(year))
		}else{
			return ( year > new Date().getFullYear() || year < new Date().getFullYear() - 120 || isNaN(year) );
		}
	},
	_monthIsInvalid: function(field, month){
		return ( month > 12 || month < 1 || isNaN(month) );
	},
	_dayIsInvalid: function(field, day){
		return ( day > 31 || day < 1 || isNaN(day) );
	}
}
String.prototype.capitalize = function(){
   return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
}