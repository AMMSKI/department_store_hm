class DepartmentsController < ApplicationController

  def index
    render component: "departments", props: {departments: Department.all}
  end

  def new
    render component: "newDep"
  end

  def create
    department = Department.new(department_params)
    if department.save
      redirect_to root_path
    else
    end
  end

  def show
    department = Department.find(params[:id]) 

    render component: "department", props: {department:department}
  end

  def edit
    department = Department.find(params[:id])

    render component: "edit", props: {department:department}
  end

  def update
    department = Department.find(params[:id])
    if department.update(department_params)
      redirect_to root_path
    else
    end
  
  end

  def destroy
    department = Department.find(params[:id])
    department.destroy
    redirect_to root_path
  end



private

def department_params
  params.require(:department).permit(:name)
end



end
