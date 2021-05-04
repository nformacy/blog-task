class ArticlePolicy < ApplicationPolicy
  def index?
    user.permissions&["Article"]&.include?('index')
  end

  def create?
    user.permissions&["Article"]&.include?('create')
  end

  def update?
    user.permissions&["Article"]&.include?('update')
  end

  def delete?
    user.permissions&["Article"]&.include?('delete')
  end
end
