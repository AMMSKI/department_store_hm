import React from "react"
import Departments from "./departments"

const Department = (props) => {
  return (
    <div>
      <h1>Department:</h1>
      <h2>{props.department.name}</h2>
      <a href="/departments">Home</a>
      <a href= {`/departments/${props.department.id}/items`}>View Items</a>
    </div>
  )
}


export default Department

