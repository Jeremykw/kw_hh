class HhForm < ActiveRecord::Base
	attr_accessor :confirm_name, :confirm_email

	validates :mandatory_fields, :presence => true, :length => { :maximum => 25 }
	validates_date :date_of_birth, :presence => true, :on_or_before => lambda { Date.current }
	validates boolean_feilds, :allow_blank => true, :inclusion => {:in => [true, false]}
	validates string_fields, :allow_blank => true, :length => { :maximum => 25 }
	validates text_fields, :allow_blank => true, :length => { :maximum => 500 }
	# validates :item_id, :presence => true, :numericality => { :only_integer => true, :greater_then_or_equal_to => 1, :less_than_or_equal_to => 212 }
	# validates :description, :allow_blank => true, :length => { :maximum => 250 }
	# validates :character_id, :presence => true, :numericality => { :only_integer => true }
	# validates :quantity, :allow_blank => true, :numericality => { :only_integer => true, :greater_then_or_equal_to => 1, :less_than_or_equal_to => 100 }
	# stats = :str, :dex, :con, :int, :wis, :char
	# validates_presence_of stats
	# validates_numericality_of stats, only_integer: true, greater_than: 2, less_than: 21


	def mandatory_fields
		[ :first_name, :last_name, :email ]
	end

	def boolean_feilds
		[:smoke,
		:chronic_cough,
		:shortness_of_breath,
		:bronchitis,
		:asthma,
		:emphysema,
		:high_bp,
		:low_bp,
		:cchf,
		:heat_attack,
		:phlebitis,
		:stroke_CVA,
		:pacemaker,
		:heart_disease,
		:diabetes,
		:epilepsy,
		:cancer,
		:arthritis,
		:digestive_conditions,
		:osteoporosis,
		:vision_problems,
		:vision_loss,
		:ear_problems,
		:hearing_loss,
		:hepatitis,
		:infectious_skin_condition,
		:tb,
		:hiv,
		:pregnant,
		:neck,
		:low_back,
		:mid_back,
		:upper_back,
		:shoulders,
		:arms,
		:legs,
		:knees,
		:other,
		:previous_massage_therapy]
	end

	def string_fields
		[:address_1,
		:address_2,
		:city,
		:provance,
		:postal_code,
		:occupation,
		:referral_source,
		:physician,
		:physician_address]
	end










    t.text     "primary_complaint"
    t.text     "secondary_complaint"
    t.text     "sports"
    t.text     "previous_massage_note"
    t.text	   "skin_condition"
    t.text     "loss_of_sensation"
    t.text     "allergies"
    t.text     "neck_note"
    t.text     "low_back_note"
    t.text     "mid_back_note"
    t.text     "upper_back_note"
    t.text     "shoulders_note"
    t.text     "arms_note"
    t.text     "legs_note"
    t.text     "knees_note"
    t.text     "other_note"
    t.text     "current_medications"
    t.text     "surgery"
    t.text     "general_health_status"
    t.text     "other_healthcare_list"
    t.text     "injuries"
    t.text     "mental_condition_note"
    t.text     "other_medical_conditions"
    t.text     "special_notes"
    
    t.boolean  "confirm"

    t.string   "phone"
    t.date     "diabetes_onset"
    t.date     "pregnant_due_date"
end
