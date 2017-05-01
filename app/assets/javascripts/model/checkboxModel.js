var formModel = formModel || {};

formModel.checkboxesForm = {

	errors: function(form){
		return formModel.validate.mergeObjects(
			formModel.validate.validateLengthOf([
				"skin_condition",
				"loss_of_sensation",
				"allergies"
			], 
			500, form),
			formModel.validate.validateBoolean([
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
			formModel.validate.validateDate("diabetes_onset", form),
			formModel.validate.validateDate("pregnant_due_date", form)

		)
	}
}
