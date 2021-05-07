class PublicController < ApplicationController

    def homepage
        # @articles = Article.approved

        @articles = Article.orderedByPublishCount
        
    end
end
