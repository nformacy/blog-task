class AddAccountIdToArticles < ActiveRecord::Migration[6.0]
  def change
    add_reference :articles, :account
  end
end
