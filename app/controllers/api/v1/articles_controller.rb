module Api
  module V1
    class ArticlesController < ApplicationController
      before_action :authenticate_user!
      before_action :authorized?

      def authorized?
        authorize controller_name.classify.constantize, "#{action_name}?".to_sym
      end
    end
  end
end
