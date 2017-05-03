class AddUserNameToTherapists < ActiveRecord::Migration
  def change
  	add_column :therapists, :first_name, :string
  	add_column :therapists, :last_name, :string
  	add_column :therapists, :clinic_name, :string
  end
end
