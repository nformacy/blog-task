class Article < ApplicationRecord
    validates_presence_of :title , :description
    belongs_to :account

    scope :approved, -> { where(approved: true) }

end
