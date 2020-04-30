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
			formView.render.errors(formModel.currentState);
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
		"date_of_birth(1i)": "2000",
		"date_of_birth(2i)": "4",
		"date_of_birth(3i)": "22",

		"primary_complaint": "bad aditude",
		"secondary_complaint": "",
		"sports": "Climbing",
		"previous_massage_note": "",
		"smoke": false,

		"chronic_cough": true,
		"shortness_of_breath": false,
		"bronchitis": false,
		"asthma": false,
		"emphysema": false,
		"hepatitis": false,
		"infectious_skin_condition": true,
		"skin_condition": "Skin Condition Description",
		"tb": false,
		"hiv": false,
		"loss_of_sensation": true,
		"loss_of_sensation_description": "real bad loss of sensation",
		"diabetes": true,
		"diabetes_onset(1i)": "2000",
		"diabetes_onset(2i)": "4",
		"diabetes_onset(3i)": "22",
		"allergies": true,
		"allergies_description": "real bad alergies",
		"epilepsy": false,
		"cancer": false,
		"arthritis": false,
		"digestive_conditions": false,
		"osteoporosis": true,
		"high_bp": true,
		"low_bp": true,
		"cchf": false,
		"heat_attack": false,
		"phlebitis": false,
		"stroke_CVA": false,
		"pacemaker": false,
		"heart_disease": false,
		"vision_problems": false,
		"vision_loss": false,
		"ear_problems": false,
		"hearing_loss": false,
		"pregnant": true,
		"pregnant_due_date(1i)": "2016",
		"pregnant_due_date(2i)": "1",
		"pregnant_due_date(3i)": "22",
		
		"neck": true,
		"neck_note": "Real sore neck",
		"low_back": false,
		"low_back_note": "",
		"mid_back": false,
		"mid_back_note": "",
		"upper_back": true,
		"upper_back_note": "Real sore upper back",
		"shoulders": false,
		"shoulders_note": "",
		"arms": true,
		"arms_note": "",
		"legs": false,
		"legs_note": "",
		"knees": false,
		"knees_note": "",
		"other": false,
		"other_note": "",

		"current_medications": "none",
		"surgery": "",
		"general_health_status": "",
		"other_healthcare_list": "Chiro, physio",
		"injuries": "",
		"mental_condition_note": "Crazy, once I ran up a treee to get my carpet but ended up finding a rabit in a hat.",
		"other_medical_conditions": "",
		"special_notes": "",
		"confirm_name": "jeremy bissonnette",
		"confirm_email": "jeremy@kwmassage.com"
	}}
