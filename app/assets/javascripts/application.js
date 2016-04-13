// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.js
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var kwMassageHealthHistory = kwMassageHealthHistory || {};
window.onload = init;
function init(){
	var isNewHhForm = document.getElementById("hh_form");
	if (isNewHhForm) {
		kwMassageHealthHistory.hhState = new kwMassageHealthHistory.baseState();
		kwMassageHealthHistory.fullForm = kwMassageHealthHistory.getFullForm();
		kwMassageHealthHistory.hHrun({});
	}
}

kwMassageHealthHistory.hHrun = function(action){
	kwMassageHealthHistory.hhState.update(action)
	kwMassageHealthHistory.hhRenderForm();

}

kwMassageHealthHistory.page = function(currentPage) {
	switch ( currentPage ){
		case 0:
			return "contactForm"
		case 1:
			return "complaintsForm"
		case 2:
			return "checkboxesForm"
		case 3:
			return "painsForm"
		case 4:
			return "otherForm"
		case 5:
			return "concentForm"
	}
};