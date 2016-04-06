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
}

kwMassageHealthHistory.baseState.prototype.update = function(action){
	var page = kwMassageHealthHistory.page(this.currentPage);
	this[page] = action.newFormData || {};

	this.errorMessages = kwMassageHealthHistory[page].errors(action.newFormData);
	this.isValid = kwMassageHealthHistory.validate.isFormValid({});
	
	this.lastPage = this._lastPage(this);
	this.currentPage = this._nextPage(action, this.isValid)
}

kwMassageHealthHistory.baseState.prototype._lastPage = function(that){
		return that.currentPage;
}

kwMassageHealthHistory.baseState.prototype._nextPage = function(action, isStateValid){
	if( !isStateValid ){
		return this.currentPage;
	}else if( action.action === "next" ){
		return this.currentPage + 1;
	}else if ( action.action === "back"){
		return this.currentPage - 1;
	}else{
		return this.currentPage
	}
}