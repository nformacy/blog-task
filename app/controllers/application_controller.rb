class ApplicationController < ActionController::API
  include JSONAPI::ActsAsResourceController
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit

  rescue_from Pundit::NotAuthorizedError, with: Proc.new { head :forbidden }

  def context
    {current_user: current_user}
  end
end
