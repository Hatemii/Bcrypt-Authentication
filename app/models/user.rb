class User < ApplicationRecord
    has_secure_password

    validates_uniqueness_of :email

    def userHandle
        return self.email.split("@")[0].capitalize
    end
end
