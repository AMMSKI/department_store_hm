import React from "react"
import Departments from "./departments"

const Department = (props) => {
  return (
    <div>
      <h1>Department:</h1>
      <h3>{props.department.name}</h3>
      <a href= {`/departments/${props.department.id}/items`}>View Items</a>
    </div>
  )
}


export default Department

