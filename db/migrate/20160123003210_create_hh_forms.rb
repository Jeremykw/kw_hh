class CreateHhForms < ActiveRecord::Migration[4.2]
  def change
    create_table :hh_forms do |t|
        #personal
        t.string :first_name 
        t.string :last_name 
        t.string :address_1 
        t.string :address_2
        t.string :city
        t.string :provance 
        t.string :postal_code
        t.string :email 
        t.string :phone
        t.string :occupation
        t.string :referral_source
        t.string :physician
        t.string :physician_address
        t.date   :date_of_birth
        #complaints sports massage history
        t.text    :primary_complaint
        t.text    :secondary_complaint
        t.text    :sports
        t.boolean :previous_massage_therapy
        t.text    :previous_massage_note
        t.boolean :smoke
        #conditions
        t.boolean :chronic_cough
        t.boolean :shortness_of_breath
        t.boolean :bronchitis
        t.boolean :asthma
        t.boolean :emphysema
        t.boolean :high_bp
        t.boolean :low_bp
        t.boolean :cchf
        t.boolean :heat_attack
        t.boolean :phlebitis
        t.boolean :stroke_CVA
        t.boolean :pacemaker
        t.boolean :heart_disease
        t.text    :skin_condition
        t.boolean :loss_of_sensation
        t.text    :loss_of_sensation_description
        t.boolean :diabetes
        t.date    :diabetes_onset
        t.boolean :allergies
        t.text    :allergies_description
        t.boolean :epilepsy
        t.boolean :cancer
        t.boolean :arthritis
        t.boolean :digestive_conditions
        t.boolean :osteoporosis
        t.boolean :vision_problems
        t.boolean :vision_loss
        t.boolean :ear_problems
        t.boolean :hearing_loss
        t.boolean :hepatitis
        t.boolean :infectious_skin_condition
        t.boolean :tb
        t.boolean :hiv
        t.boolean :pregnant
        t.date    :pregnant_due_date
        #hns
        t.boolean   :neck
        t.text      :neck_note
        t.boolean   :low_back 
        t.text      :low_back_note
        t.boolean   :mid_back
        t.text      :mid_back_note
        t.boolean   :upper_back
        t.text      :upper_back_note
        t.boolean   :shoulders
        t.text      :shoulders_note
        t.boolean   :arms
        t.text      :arms_note
        t.boolean   :legs
        t.text      :legs_note
        t.boolean   :knees
        t.text      :knees_note
        t.boolean   :other 
        t.text      :other_note
        #
        t.text   :current_medications
        t.text   :surgery
        t.text   :general_health_status  
        t.text   :other_healthcare_list
        #
        t.text :injuries
        t.text :mental_condition_note
    	t.text :other_medical_conditions
    	t.text :special_notes

        t.boolean :confirm
        t.string :confirm_name
        t.string :confirm_email
        
      t.timestamps null: false
    end
  end
end