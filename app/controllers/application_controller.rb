class ApplicationController < ActionController::API
   include JSONAPI::ActsAsResourceController
   include DeviseTokenAuth::Concerns::SetUserByToken
end
