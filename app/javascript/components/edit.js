import React from "react"

const Edit = (props) => {
  return (
    <div>
      <h1>Edit Department</h1>
      <div>
        <form action={`/departments/${props.department.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
          <p>Edit Department name</p>
          <input defaultValue={props.department.name} name="department[name]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Edit