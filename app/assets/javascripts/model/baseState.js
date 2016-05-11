var formModel = formModel || {};

formModel.baseState = function(){

	this.contactForm	= {};
	this.complaintsForm	= {};
	this.checkboxesForm	= {};
	this.painsForm		= {};
	this.otherForm		= {};
	this.concentForm	= {};

	this.errorMessages = {};
	this.isValid = true;

	this.lastPage = 0;
	this.currentPage = 0;

	this.diabetes_onset = "none";
	this.pregnant_due_date = "none";
	this.neck_pain = "none";
	this.low_back_pain = "none";
	this.mid_back_pain = "none";
	this.upper_back_pain = "none";
	this.shoulders_pain = "none";
	this.arms_pain = "none";
	this.legs_pain = "none";
	this.knees_pain = "none";
	this.other_pain = "none";
}

formModel.baseState.prototype.update = function(action){
	var page = formController.page(this.currentPage); 
	this[page] = action.newFormData;
	this.errorMessages = formModel[page].errors(action.newFormData, this) || {};
	this.isValid = true;//formModel.validate.isFormValid(this.errorMessages);
	
	this.lastPage = this._lastPage(this);
	this.currentPage = this._nextPage(action, this);
}

formModel.baseState.prototype.createJsonObjectFromState = function(){
	var jsonForm = {};
	combindedForms = formModel.validate.mergeObjects(
		this.contactForm,
		this.complaintsForm,
		this.checkboxesForm,
		this.painsForm,
		this.otherForm,
		this.concentForm
	)
	for( field in combindedForms ){
		var key = Object.keys(field);
		var reg = /^hh_form_/;
		var newKey = field.replace(reg, "");
		var dateString, dateField;
		if (this._isADateField(newKey)){
			dateString = newKey.match(/[1-3]i$/);
			dateField = newKey.replace(/_[1-3]i$/, "");
			newKey = dateField + "(" + dateString[0] + ")";
		}
		jsonForm[newKey] = combindedForms[field];
	}

	return {hh_form: jsonForm};
}

formModel.baseState.prototype._isADateField = function(field){
	if ( field === "date_of_birth_1i" || 
		 field === "date_of_birth_2i" || 
		 field === "date_of_birth_3i" ||
		 field === "diabetes_onset_1i" ||
		 field === "diabetes_onset_2i" ||
		 field === "diabetes_onset_3i" ||
		 field === "pregnant_due_date_1i" ||
		 field === "pregnant_due_date_2i" ||
		 field === "pregnant_due_date_3i" ){
		return true
	}else{
		return false
	}
}


formModel.baseState.prototype._lastPage = function(that){
		if( that.isValid ){
			return that.currentPage;
		}else{
			return that.lastPage
		}
}

formModel.baseState.prototype._nextPage = function(action, that){
	if( that.isValid ){
		if( action.action === "next" || action.action === "submit"){
			return that.currentPage + 1;
		}else if ( action.action === "back"){
			return that.currentPage - 1;
		}else{
			return that.currentPage;
		}
	}else{
		return that.currentPage;
	}
}

