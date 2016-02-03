# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160123003210) do

  create_table "hh_forms", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "address_1"
    t.string   "address_2"
    t.string   "city"
    t.string   "provance"
    t.string   "postal_code"
    t.string   "email"
    t.string   "phone"
    t.string   "occupation"
    t.string   "referral_source"
    t.string   "physician"
    t.string   "physician_address"
    t.date     "date_of_birth"
    t.text     "primary_complaint"
    t.text     "secondary_complaint"
    t.text     "sports"
    t.boolean  "previous_massage_therapy"
    t.text     "previous_massage_note"
    t.boolean  "smoke"
    t.boolean  "chronic_cough"
    t.boolean  "shortness_of_breath"
    t.boolean  "bronchitis"
    t.boolean  "asthma"
    t.boolean  "emphysema"
    t.boolean  "high_bp"
    t.boolean  "low_bp"
    t.boolean  "cchf"
    t.boolean  "heat_attack"
    t.boolean  "phlebitis"
    t.boolean  "stroke_CVA"
    t.boolean  "pacemaker"
    t.boolean  "heart_disease"
    t.string   "skin_condition"
    t.text     "loss_of_sensation"
    t.boolean  "diabetes"
    t.date     "diabetes_onset"
    t.text     "allergies"
    t.boolean  "epilepsy"
    t.boolean  "cancer"
    t.boolean  "arthritis"
    t.boolean  "digestive_conditions"
    t.boolean  "osteoporosis"
    t.boolean  "vision_problems"
    t.boolean  "vision_loss"
    t.boolean  "ear_problems"
    t.boolean  "hearing_loss"
    t.boolean  "hepatitis"
    t.boolean  "infectious_skin_condition"
    t.boolean  "tb"
    t.boolean  "hiv"
    t.boolean  "pregnant"
    t.date     "pregnant_due_date"
    t.boolean  "neck"
    t.text     "neck_note"
    t.boolean  "low_back"
    t.text     "low_back_note"
    t.boolean  "mid_back"
    t.text     "mid_back_note"
    t.boolean  "upper_back"
    t.text     "upper_back_note"
    t.boolean  "shoulders"
    t.text     "shoulders_note"
    t.boolean  "arms"
    t.text     "arms_note"
    t.boolean  "legs"
    t.text     "legs_note"
    t.boolean  "knees"
    t.text     "knees_note"
    t.boolean  "other"
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
    t.string   "confirm_name"
    t.string   "confirm_email"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

end
