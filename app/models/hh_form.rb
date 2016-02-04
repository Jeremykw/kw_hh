class HhForm < ActiveRecord::Base
	attr_accessor :confirm_name, :confirm_email

	validates :first_name, :presence => true, :length => { :maximum => 25 }
	validates :last_name, :presence => true, :length => { :maximum => 25 }
	validates :email, :presence => true
	validates_date :date_of_birth, :on_or_before => lambda { Date.current }

	# validates :item_id, :presence => true, :numericality => { :only_integer => true, :greater_then_or_equal_to => 1, :less_than_or_equal_to => 212 }
	# validates :description, :allow_blank => true, :length => { :maximum => 250 }
	# validates :character_id, :presence => true, :numericality => { :only_integer => true }
	# validates :quantity, :allow_blank => true, :numericality => { :only_integer => true, :greater_then_or_equal_to => 1, :less_than_or_equal_to => 100 }


	# stats = :str, :dex, :con, :int, :wis, :char
	# validates_presence_of stats
	# validates_numericality_of stats, only_integer: true, greater_than: 2, less_than: 21

end
