var kwMassageHealthHistory = kwMassageHealthHistory || {};

kwMassageHealthHistory.checkboxesForm = {

	domManipulation: function(){
		var diabetesCheckbox = document.getElementById('hh_form_diabetes');
		var pregnantCheckbox = document.getElementById('hh_form_pregnant');
		document.getElementById('diabetes_onset').style.display = kwMassageHealthHistory.hhState.diabetes_onset;
		document.getElementById('pregnant_due_date').style.display = kwMassageHealthHistory.hhState.pregnant_due_date;
		if ( !kwMassageHealthHistory.hhState.prenantHandeler ){
			pregnantCheckbox.addEventListener('change', function(){
				toggle('pregnant_due_date');
				kwMassageHealthHistory.hhState.prenantHandeler = true;
			})
		}
		if ( !kwMassageHealthHistory.hhState.diabetesHandeler ){
			diabetesCheckbox.addEventListener('change', function(){
				toggle('diabetes_onset');
				kwMassageHealthHistory.hhState.diabetesHandeler = true;
			})
		}
		function toggle(element){
			if ( kwMassageHealthHistory.hhState[element] === "none" ){
				document.getElementById(element).style.display = 'block';
				kwMassageHealthHistory.hhState[element] = "block";
			}else{
				document.getElementById(element).style.display = 'none';
				kwMassageHealthHistory.hhState[element] = "none";
			}
		}
	},
	errors: function(form){
		return kwMassageHealthHistory.validate.mergeErrors(
			kwMassageHealthHistory.validate.validateLengthOf([
				"skin_condition",
				"loss_of_sensation",
				"allergies"
			], 
			500, form),
			kwMassageHealthHistory.validate.validateBoolean([
				"chronic_cough",
				"shortness_of_breath",
				"bronchitis",
				"asthma",
				"emphysema",
				"high_bp",
				"low_bp",
				"cchf",
				"heat_attack",
				"phlebitis",
				"stroke_CVA",
				"pacemaker",
				"heart_disease",
				"diabetes",
				"epilepsy",
				"cancer",
				"arthritis",
				"digestive_conditions",
				"osteoporosis",
				"vision_problems",
				"vision_loss",
				"ear_problems",
				"hearing_loss",
				"hepatitis",
				"infectious_skin_condition",
				"tb",
				"hiv",
				"pregnant"
			], form),
			kwMassageHealthHistory.validate.validateDate("diabetes_onset", form),
			kwMassageHealthHistory.validate.validateDate("pregnant_due_date", form)

		)
	}
}
