module Api
  module V1
    class ArticleResource < JSONAPI::Resource
      attributes :title, :content, :publisher_id

      has_one :publisher, :class_name => "User", :foreign_key => 'publisher_id'
    end
  end
end
