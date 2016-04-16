var kwMassageHealthHistory = kwMassageHealthHistory || {};


kwMassageHealthHistory.baseState = function(){

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
	this.hh_form_neck_note = "none";
	this.hh_form_low_back_note = "none";
	this.hh_form_mid_back_note = "none";
	this.hh_form_upper_back_note = "none";
	this.hh_form_shoulders_note = "none";
	this.hh_form_arms_note = "none";
	this.hh_form_legs_note = "none";
	this.hh_form_knees_note = "none";
	this.hh_form_other_note = "none";
}

kwMassageHealthHistory.baseState.prototype.update = function(action){
	var page = kwMassageHealthHistory.page(this.currentPage);
	this[page] = action.newFormData;

	this.errorMessages = kwMassageHealthHistory[page].errors(action.newFormData) || {};
	this.isValid = true;//kwMassageHealthHistory.validate.isFormValid(this.errorMessages);
	
	this.lastPage = this._lastPage(this);
	this.currentPage = this._nextPage(action, this)
}

kwMassageHealthHistory.baseState.prototype._lastPage = function(that){
		if( that.isValid ){
			return that.currentPage;
		}else{
			return that.lastPage
		}
}

kwMassageHealthHistory.baseState.prototype._nextPage = function(action, that){
	if( that.isValid ){
		if( action.action === "next" ){
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