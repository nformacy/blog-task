# Legendary News Blog

# Description
- Fork the repo to your Github https://help.github.com/en/articles/fork-a-repo.
- Push your work to your forked repo "user-name/blog-task".
- Create pull request in the original repo "nformacy/blog-task"

# Story
Jon the chief editor in “legendary News” asked the journal owner Michael to make him an appointment with Adam their technical partner to ask them for help.
He wants to make an app that would help him manage the articles that being posted by the journalists, Michael is the only one that can delete articles, and approve the articles to be published, every article has a title, description, and author name.


# Requirements
- List of articles publicly available sorted by most popular authors ( who has the highest number of published articles).
- Create article.
- Delete article.
- Approve article.
- When an author view all articles, they see their own articles first.
- e2e tests.
- Edit README to include the required steps to run your application.

# Stack
- Ruby on Rails is preferred or any stack that fulfills the task.

# Nice to have
- Organized and well written git commit history.
- unit tests.

# Task Deadline
- Sunday 9/05/2021 12:00 PM.

# How to run the project?

the project splitted into backend (API) and frontend (admin folder)

## setup backend

1. install deps

      bundle install


2. setup database

      rake db:create
      rake db:migrate
      rake db:seed

3. start

      rails s

## setup frontend

in another temrinal pane:

1. go to the directory

      cd admin

2. install deps

      yarn

3. start

      yarn dev
