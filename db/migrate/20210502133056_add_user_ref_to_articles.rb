class AddUserRefToArticles < ActiveRecord::Migration[6.0]
  def change
    add_reference :articles, :publisher, default: nil, null: true, foreign_key: { to_table: :users }
  end
end
