class ItemsController < ApplicationController

  before_action :set_department
  before_action :set_item, only: [:show]

  def index
    render component: "items", props:{ department: @department, items: @department.items}  
  end

  def show
    render component: 'item', props:{department: @department, item:@item}
  end

  private
  
  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end
  
end
