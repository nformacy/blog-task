class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show edit update destroy ]
  before_action :authenticate_account! , except: %i[ show ]
  before_action :can_modify , only: %i[ edit update destroy  ]
  after_action :update_counter , only: %i[ update destroy  ]

  # GET /articles  
  def index
    if current_account.is_admin == true
      @articles = Article.allArticlesForCurrentAccount(current_account) + Article.allArticlesForOtherAccount(current_account)
    else
      @articles = Article.articlesForCurrentAccount(current_account) + Article.articlesForOtherAccount(current_account)
    end
  end

  # GET /articles/1 
  def show
  end

  # GET /articles/new
  def new
    @article = Article.new
  end

  # GET /articles/1/edit
  def edit
  end

  # POST /articles  
  def create
    @article = Article.new(article_params)
    @article.account_id = current_account.id

    if @article.save
      redirect_to @article, notice: "Article was successfully created." 
    else
      render :new, status: :unprocessable_entity 
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_edit_params)
      redirect_to articles_url, notice: "Article was successfully updated." 
    else
      render :edit, status: :unprocessable_entity 
    end
  end

  # DELETE /articles/1 
  def destroy
    @article.destroy
    redirect_to articles_url, notice: "Article was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    def can_modify
      unless current_account.is_admin == true
        flash[:notice] = 'Only admins can modify'
        redirect_back(fallback_location: root_path) and return
      end
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :description)
    end

    def article_edit_params
      params.require(:article).permit(:approved)
    end

    def update_counter
      count = Article.all.where(approved: true, account_id: @article.account_id).count
      Account.where(id: @article.account_id).update(publish_count: count)
    end
end
