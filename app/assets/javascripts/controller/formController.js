var formController = formController || {};

formController.init = function(first_argument) {

	formModel.currentState = new formModel.baseState();
	formView.fullForm = new formView.baseFullForm();
	formView[formController.page(formModel.currentState.currentPage)](formModel.currentState);

}

formController.update = function(action){
	var state = formModel.currentState;
	state.update(action);
	var currentPage = formController.page(state.currentPage);
	if ( state.isValid ){
		formView[currentPage](state);
	}else{
		formView.render.errors(state);
	}

}

formController.submit = function(action){
	formModel.currentState.update(action)
	$.ajax("/hh_forms.json", {
		data: formModel.currentState.createJsonObjectFromState(),
		type: 'POST',
		dataType: 'html',
		beforeSend: function(xhr) {
			xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
		},
		success: function(data){
			formView.confirmSubmit.preview(data);
		},
		error: function() {
			formView.confirmSubmit.error();
		}
	});
}

formController.testData = {"hh_form": {
		"first_name": "Jeremy",
		"last_name": "Bissonnette",
		"address_1": "",
		"address_2": "",
		"city": "",
		"provance": "",
		"postal_code": "",
		"email": "jeremy@kwmassage.com",
		"phone": "55555555555",
		"occupation": "",
		"referral_source": "",
		"physician": "",
		"physician_address": "",
		"date_of_birth(1i)": "2016",
		"date_of_birth(2i)": "4",
		"date_of_birth(3i)": "22",
		"primary_complaint": "bad aditude",
		"secondary_complaint": "",
		"sports": "",
		"previous_massage_note": "",
		"smoke": "0",
		"chronic_cough": "0",
		"shortness_of_breath": "0",
		"bronchitis": "0",
		"asthma": "0",
		"emphysema": "0",
		"hepatitis": "0",
		"infectious_skin_condition": "0",
		"tb": "0",
		"hiv": "0",
		"loss_of_sensation": "0",
		"diabetes": "0",
		"diabetes_onset(1i)": "2016",
		"diabetes_onset(2i)": "4",
		"diabetes_onset(3i)": "22",
		"allergies": "0",
		"epilepsy": "0",
		"cancer": "0",
		"arthritis": "0",
		"digestive_conditions": "0",
		"osteoporosis": "0",
		"high_bp": "0",
		"low_bp": "0",
		"cchf": "0",
		"heat_attack": "0",
		"phlebitis": "0",
		"stroke_CVA": "0",
		"pacemaker": "0",
		"heart_disease": "0",
		"vision_problems": "0",
		"vision_loss": "0",
		"ear_problems": "0",
		"hearing_loss": "0",
		"skin_condition": "0",
		"pregnant": "0",
		"pregnant_due_date(1i)": "2016",
		"pregnant_due_date(2i)": "4",
		"pregnant_due_date(3i)": "22",
		"neck": "0",
		"neck_note": "",
		"low_back": "0",
		"low_back_note": "",
		"mid_back": "0",
		"mid_back_note": "",
		"upper_back": "0",
		"upper_back_note": "",
		"shoulders": "0",
		"shoulders_note": "",
		"arms": "0",
		"arms_note": "",
		"legs": "0",
		"legs_note": "",
		"knees": "0",
		"knees_note": "",
		"other": "0",
		"other_note": "",
		"current_medications": "",
		"surgery": "",
		"general_health_status": "",
		"other_healthcare_list": "",
		"injuries": "",
		"mental_condition_note": "",
		"other_medical_conditions": "",
		"special_notes": "",
		"confirm_name": "jeremy bissonnette",
		"confirm_email": "jeremy@kwmassage.com"
	}}
