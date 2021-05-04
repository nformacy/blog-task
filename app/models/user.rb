# frozen_string_literal: true
class User < ActiveRecord::Base
  PERMISSIONS = {
    'Article': ['create', 'update', 'index'],
    "User": ["index"]
  }.freeze
  SUPER_ADMIN_PERMISSIONS = {
    'Article': ['create', 'update', 'index', 'destroy'],
    "User": ["index", 'create', 'update', 'destroy']
  }.freeze

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :articles, foreign_key: 'publisher_id'
  after_initialize :init

  def init
    self.permissions ||= User::PERMISSIONS
  end
end
