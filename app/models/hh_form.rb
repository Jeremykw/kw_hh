class HhForm < ActiveRecord::Base
	
	validates_date :date_of_birth, :presence => true, :on_or_before => lambda { Date.current }
    validates_date :diabetes_onset, :allow_blank => true, :on_or_before => lambda { Date.current }
    validates_date :pregnant_due_date, :allow_blank => true, :on_or_before => lambda { Date.current }

	validate :validate_mandatory_fields, :validate_boolean_fields, :validate_concent_name, :validate_concent_email, :validate_concent

    def validate_concent_name
    	name = self.first_name + " " + self.last_name
    	if name != self.confirm_name
    		errors.add(:confirm_name, "Be sure to give you concent by entering your First and last name exactly as you did above.")
    	else 
    		return true
    	end
    end

    def validate_concent_email
    	if self.email != self.confirm_email
    		errors.add(:confirm_email, "Be sure to give your concent by entering your email exactly as you did above.")
    	else 
    		return true
    	end
    end

    def validate_concent
    	if validate_concent_email && validate_concent_name
    		self.confirm = true
    		return true
    	end
	end


    # t.boolean  "confirm"
    # t.string   "phone"

	# validates :item_id, :presence => true, :numericality => { :only_integer => true, :greater_then_or_equal_to => 1, :less_than_or_equal_to => 212 }
	# validates :description, :allow_blank => true, :length => { :maximum => 250 }
	# validates :character_id, :presence => true, :numericality => { :only_integer => true }
	# validates :quantity, :allow_blank => true, :numericality => { :only_integer => true, :greater_then_or_equal_to => 1, :less_than_or_equal_to => 100 }
	# stats = :str, :dex, :con, :int, :wis, :char
	# validates_presence_of stats
	# validates_numericality_of stats, only_integer: true, greater_than: 2, less_than: 21
	
	###
	# => validates each member of group of fields 
	###
	def validate_mandatory_fields
		mandatory_fields.each do |field|
			if !field
				error.add(field, "You forgot to enter your #{field.humanize}.")
			elsif field.length > 25
				error.add(field, "Your #{field.humanize} should be less than 25 characters.")		
			end
		end
	end

	def validate_boolean_fields
		boolean_fields.each do |field|
			unless field == nil || field == true || field == false
				errors.add(field, "Don't be an asshole!")
			end
		end
	end

	def validate_string_fields
		string_fields.each do |field|
			unless field == nil || field.length < 25
				errors.add(field, "Your #{field.humanize} should be less than 25 characters.")
			end
		end
	end

	def validate_text_fields
		text_fields.each do |field|
			unless field == nil || field.length < 500
				error.add(field, "Your #{field.humanize} should be less than 250 characters.")
			end
		end
	end

	###
	# => Arrays of fields to be validated
	###
	def mandatory_fields
		[ :first_name, :last_name, :email, :confirm_name, :confirm_email ]
	end

	def boolean_fields
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
		:physician_address,
	    :confirm_name,
    	:confirm_email]
	end

	def text_fields
		[:primary_complaint,
		:secondary_complaint,
		:sports,
		:previous_massage_note,
		:skin_condition,
		:loss_of_sensation,
		:allergies,
		:neck_note,
		:low_back_note,
		:mid_back_note,
		:upper_back_note,
		:shoulders_note,
		:arms_note,
		:legs_note,
		:knees_note,
		:other_note,
		:current_medications,
		:surgery,
		:general_health_status,
		:other_healthcare_list,
		:injuries,
		:mental_condition_note,
		:other_medical_conditions,
		:special_notes]
	end

end
