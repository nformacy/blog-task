class ArticlePolicy < ApplicationPolicy
  def index?
    super_admin? || user.permissions&.[]("Article")&.include?('index')
  end

  def show?
    super_admin? || (
      user.permissions&.[]("Article")&.include?('show') &&

      # normal user only show his own article
      record.publisher == user
    )
  end

  def create?
    super_admin? || user.permissions&.[]("Article")&.include?('create')
  end

  def update?
    super_admin? || user.permissions&.[]("Article")&.include?('update')
  end

  def destroy?
    super_admin?
  end
end
