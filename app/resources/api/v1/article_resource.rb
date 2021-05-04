module Api
  module V1
    class ArticleResource < JSONAPI::Resource
      attributes :title, :content, :publisher_id

      has_one :publisher, :class_name => "User", :foreign_key => 'publisher_id'

      def self.records(options = {})
        context = options[:context]

        if context[:current_user].super_admin
          Article.all
        else
          context[:current_user].articles
        end
      end
    end
  end
end
