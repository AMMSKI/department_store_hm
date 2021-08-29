import React from "react"


const Item = (props) => {
  const renderItem = () => {
    return(
    <div className="header">
      <h1>Item:</h1>
      <div>
        <h1>{props.item.name}</h1>
        <h3>{props.item.discription}</h3>
        <a href={`/departments/${props.department.id}/items`}>Back</a>
        <a href={`/departments/${props.department.id}/items/${props.item.id}/edit`}>Edit Item</a>
        <a href={`/items/${props.item.id}/reviews`}>View Reviews</a>
      </div>
    </div>
    )
  }
  return renderItem()
  }

export default Item