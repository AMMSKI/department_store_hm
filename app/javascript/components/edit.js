import React from "react"

const Edit = (props) => {
  return (
    <div className="header">
      <h1>Edit Department</h1>
      <a href="/">Home</a>
      <div>
        <form action={`/departments/${props.department.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
          <p>Edit Department name</p>
          <textarea className="departmentinput" defaultValue={props.department.name} name="department[name]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Edit