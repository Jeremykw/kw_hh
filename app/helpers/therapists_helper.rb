module TherapistsHelper
	def crypt 
		return ActiveSupport::MessageEncryptor.new(Rails.application.secrets.secret_key_base)
	end

	def encrypt_id(id)
		return crypt.encrypt_and_sign('my confidental data')
	end

	def decrypt_id(encrypted_id)
		return crypt.decrypt_and_verify(encrypted_id)
	end
end