class Article < ApplicationRecord
  belongs_to :publisher, :class_name => "User", :foreign_key => 'publisher_id', :optional => true, :foreign_type => "user"
  alias_attribute :user, :publisher
end
