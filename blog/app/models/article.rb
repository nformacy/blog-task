class Article < ApplicationRecord
    validates_presence_of :title , :description
    belongs_to :account

    scope :orderedByPublishCount, -> { where(approved: true).includes(:account).order('accounts.publish_count DESC') }

    scope :articlesForCurrentAccount, ->(current_account) { where(approved: true , account_id: current_account) }
    scope :articlesForOtherAccount, -> (current_account) { where(approved: true).where.not(account_id: current_account) }
    
    scope :allArticlesForCurrentAccount, ->(current_account) { where(account_id: current_account) }
    scope :allArticlesForOtherAccount, -> (current_account) { where.not(account_id: current_account) }

end 
