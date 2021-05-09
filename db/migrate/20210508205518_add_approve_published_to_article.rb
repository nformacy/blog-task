class AddApprovePublishedToArticle < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :is_approved, :boolean, default: false, null: false
    add_column :articles, :is_published, :boolean, default: false, null: false
  end
end
