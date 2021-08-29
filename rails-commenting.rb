# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostController is inheriting the Application controller. BlogPostController will be recieving information and inheriting behavior from Application controller. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Index method that will select every item from BlogPostController and assign it to an instance variable. This will return a collection of all the BlogPosts and store as an instance variable. 
    @posts = BlogPost.all
  end

  def show
    # ---3) This is the show method that will return an instance variable containing a single blog post allowing the user to search for a blog post by :id.
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method adds new content or a new post. It creates a new object and saves it as an instance variable.  
  def new
    @post = Post.new
  end

  def create
    # ---5) The create method adds a post route and assigns an instance variable. It creates a new record. If @post.valid?, the page will redirect. If not, it will stay on the current page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) This is the edit method that will add the ability for the user to edit content. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method determines if the object is valid and updates the post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The else statement is a conditional that will route to another page. I think it will redirect to the original blog post if it was not deleted.  
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private makes the information only accessable from BlogPostsController. In other words, everything in private is only accessable inside the controller and sets restrictions on manipulating the data.  
  private
  def blog_post_params
    # ---10) This block permits :titles, & :content to be updated in the database. 
    params.require(:blog_post).permit(:title, :content)
  end
end
