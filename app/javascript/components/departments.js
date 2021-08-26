import React from "react"

const Departments = (props) => {
  const renderDepartments = () => {
  return props.departments.map((department)=>{
    return (
      <div>
        <h2>{department.name}</h2>
        <a href= {`/departments/${department.id}`}>View Department</a>
        <a href= {`/departments/${department.id}/items`}>View Items</a>
        <a href= {`/departments/${department.id}/edit`}>Edit Department</a>
        <a href= {`/departments/${department.id}`} data-method="delete">Delete</a>
      </div>
    )
  })
}

return (
  <div>
    <h1>Departments:</h1>
    <a href="/departments/new">Add New Department</a>
    {renderDepartments()}
  </div>
)
}

export default Departments