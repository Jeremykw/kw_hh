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

// window.onload = init;
function init(){
	var isNewHhForm = document.getElementById("hh_form");
	if (isNewHhForm) {
		kwMassageHealthHistory.hHrun({}, {action: "init"}, getFullForm());
	}
}
var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.hHrun = function(state, action, fullForm){
	var newState = new kwMassageHealthHistory.hhState(state, action);
	// this.hhRenderForm(newState, fullForm);
	return newState;
}
