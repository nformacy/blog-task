class UserPolicy < ApplicationPolicy
  def index?
    user.permissions&.[]("User")&.include?('index')
  end

  def create?
    super_admin? || user.permissions&.[]("User")&.include?('create')
  end

  def show?
    super_admin? || (
      user.permissions&.[]("User")&.include?('show') &&

      # user only show details of his record
      record == user
    )
  end

  def update?
    super_admin? || user.permissions&.[]("User")&.include?('update')
  end

  def destroy?
    super_admin? || user.permissions&.[]("User")&.include?('delete')
  end
end
