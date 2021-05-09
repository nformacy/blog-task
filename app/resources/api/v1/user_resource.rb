module Api
  module V1
    class UserResource < JSONAPI::Resource
      attributes :name, :nickname, :image, :email, :permissions

      has_many :articles
    end
  end
end
