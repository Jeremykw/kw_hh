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
	this.currentPage = 5;

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

kwMassageHealthHistory.baseState.prototype.createJsonObjectFromState = function(){
	var jsonForm = { hh_from: kwMassageHealthHistory.validate.mergeObjects(
		this.contactForm,
		this.complaintsForm,
		this.checkboxesForm,
		this.painsForm,
		this.otherForm,
		this.concentForm
	)}
	return jsonForm;
}

kwMassageHealthHistory.baseState.prototype.update = function(action){
	var page = kwMassageHealthHistory.page(this.currentPage);
	this[page] = action.newFormData;

	this.errorMessages = kwMassageHealthHistory[page].errors(action.newFormData, this) || {};
	this.isValid = true;//kwMassageHealthHistory.validate.isFormValid(this.errorMessages);
	
	this.lastPage = this._lastPage(this);
	this.currentPage = this._nextPage(action, this);
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

