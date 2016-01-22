class CreateHhForms < ActiveRecord::Migration
  def change
    create_table :hh_forms do |t|
      t.string :fname
      t.string :lname
      t.integer :phone1
      t.integer :phone2
      t.string :email
      t.string :address
      t.string :city
      t.string :postal_code
      t.integer :dob
      t.string :occupation
      t.string :primary_complaint
      t.string :who_reffered
      t.string :sports
      t.boolean :smoke


      t.timestamps null: false
    end
  end
end
