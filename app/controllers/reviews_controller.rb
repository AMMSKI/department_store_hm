class ReviewsController < ApplicationController
  
  before_action :set_item

  before_action :set_review, only: [:show, :edit, :update, :destroy]


  # /items/:item_id/reviews/:id(.:format)	reviews#show
  def index 
    render component: 'reviews', props: {item:@item, reviews:@item.reviews}
  end

  def new 
    render component: 'newReview', props: {item:@item}
  end

  def create
    @review = @item.reviews.new(review_params)
    if(@review.save)
      redirect_to item_reviews_path
    else
    end
  end


  def edit
    render component: 'editReview', props: {item:@item, review:@review}
  end


  def update
    if @review.update(review_params)
      redirect_to item_reviews_path
    else
    end
  end

  def destroy
    @review.destroy
    redirect_to item_reviews_path
  end






private
  
  def review_params
    params.require(:review).permit(:stars, :body)
  end
  
  def set_item
    @item = Item.find(params[:item_id])
  end

  def set_review
    @review = Review.find(params[:id])
  end

end
