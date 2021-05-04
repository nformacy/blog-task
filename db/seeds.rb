# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if User.count.zero?
  puts 'creating users...'
  User.create!([
    {email: 'admin@admin.com', password: 'admin123', permissions: User::SUPER_ADMIN_PERMISSIONS, super_admin: true},
    {email: 'author@admin.com', password: 'admin123'}
  ])
end

if Article.count.zero?
  puts 'creating articles...'
  Article.create!(title: 'First Article from Admin', content: 'First article content foobar', publisher: User.find_by(super_admin: true))
  Article.create!(title: 'second Article from Author', content: 'second article content foobar', publisher: User.find_by(super_admin: false))
end
