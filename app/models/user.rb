class User < ApplicationRecord
    has_many :jobs

    has_secure_password

    validates_presence_of :email, :password
    validates_uniqueness_of :email

    def userHandle
        return self.email.split("@")[0].capitalize
    end
end
