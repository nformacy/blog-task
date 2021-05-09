class Article < ApplicationRecord
  PERMITTED_ATTRIBUTES = [:title, :content, :publisher_id, :is_published].freeze
  SUPER_ADMIN_PERMITTED_ATTRIBUTES = [*PERMITTED_ATTRIBUTES, :is_approved]
  belongs_to :publisher, :class_name => "User", :foreign_key => 'publisher_id', :optional => true, :foreign_type => "user"
  alias_attribute :user, :publisher
end
