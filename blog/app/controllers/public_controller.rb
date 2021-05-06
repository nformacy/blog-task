class PublicController < ApplicationController

    def homepage
        @articles = Article.approved
    end
end
