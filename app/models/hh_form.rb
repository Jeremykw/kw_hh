class HhForm < ActiveRecord::Base
	before_save :format_mandatory_fields
	validates_date :date_of_birth, :presence => true, :on_or_before => lambda { Date.current }
    validates_date :diabetes_onset, :allow_blank => true, :on_or_before => lambda { Date.current }
    validates_date :pregnant_due_date, :allow_blank => true, :on_or_before => lambda { Date.current }
    validates_format_of :email, :with => /.+@.+\..+/i
	validates_format_of :postal_code, 
		:with => /[a-z, A-Z][0-9][a-z, A-Z]\ ?[0-9][a-z, A-Z][0-9]/,
		:message => "must be in the H0H 0H0 format"
	validates_format_of :phone,
		:with => /\(?[0-9]{3}\)?-[0-9]{3}-[0-9]{4}/,
		:message => "numbers must be in xxx-xxx-xxxx format."
	validate :validate_mandatory_fields, :validate_boolean_fields, :validate_string_fields, :validate_text_fields, :validate_concent
	
	###
	# => concent validations
	###
    def validate_concent_name
    	name = self.first_name + " " + self.last_name
    	if name.downcase != self.confirm_name.downcase
    		errors.add(:confirm_name, "should match your first and last name separated by one space.")
    	else 
    		return true
    	end
    end

    def validate_concent_email
    	if self.email.downcase != self.confirm_email.downcase
    		errors.add(:confirm_email, "should match your email address.")
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

	###
	# => validates each member of group of fields 
	###
	def validate_mandatory_fields
		mandatory_fields.each do |field|			
			errors.add(field, "can't be blank.") if self[field] == ""
			errors.add(field, "should be less than 25 characters.") if self[field].length > 25			
		end
	end

	def validate_boolean_fields
		boolean_fields.each do |field|
			unless self[field] == nil || self[field] == true || self[field] == false ||self[field] == 0
				errors.add(field, "Don't be an asshole!")
			end
		end
	end

	def validate_string_fields
		string_fields.each do |field|
			unless self[field] == nil or self[field] == ""
				errors.add(field, "should be less than 25 characters.") unless self[field].length < 25
			end
		end
	end

	def validate_text_fields
		text_fields.each do |field|
			unless self[field] == nil or self[field] == ""
				error.add(field, "should be less than 250 characters.") unless field.length < 500
			end
		end
	end

	def format_mandatory_fields
		format_postal_code
		format_name
	end

	def format_postal_code
		postal_code = self.postal_code.upcase
		if postal_code.length < 7
			postal_code.insert(3, " ")
		end
		self.postal_code = postal_code
	end

	def format_name
		first = self.first_name.capitalize
		last = self.last_name.capitalize
		self.first_name = first
		self.last_name = last
	end
	###
	# => Arrays of fields to be validated
	###
	def mandatory_fields
		[ :first_name, :last_name, :email, :phone, :confirm_name, :confirm_email ]
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
