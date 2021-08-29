import React from "react"

const NewItem = (props) => {
  const {department} = props
  return (
    <div className="header">
      <h1>New Item</h1>
      <form action={`/departments/${department.id}/items`} method="post">
          <p>New Item name</p>
          <input name="item[name]"/>
          <p>New Item Discription</p>
          <textarea className="descriptioninput" name="item[discription]"/>
          <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewItem