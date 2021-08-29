import React from "react"

const EditItem = (props) => {
  return (
    <div className="header">
      <h1>Edit Item</h1>
      <div>
        <form action={`/departments/${props.department.id}/items/${props.item.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
          <p>Edit Item name</p>
          <input defaultValue={props.item.name} name="item[name]"/>
          <p>Edit Item Description</p>
          <textarea  className="descriptioninput" defaultValue={props.item.discription} name="item[discription]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default EditItem