JSONAPI.configure do |config|
  config.json_key_format = :underscored_key
  config.exception_class_whitelist = [Pundit::NotAuthorizedError]
end
