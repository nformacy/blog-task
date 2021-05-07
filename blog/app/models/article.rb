class Article < ApplicationRecord
    validates_presence_of :title , :description
    belongs_to :account

    scope :orderedByPublishCount, -> { where(approved: true).includes(:account).order('accounts.publish_count DESC') }

    scope :currentAccount, ->(current_account) { where(approved: true , account_id: current_account) }
    scope :otherAccount, -> (current_account) { where(approved: true).where.not(account_id: current_account) }
    
    scope :currentAccountIsAdmin, ->(current_account) { where(account_id: current_account) }
    scope :otherAccountIsAdmin, -> (current_account) { where.not(account_id: current_account) }

end
