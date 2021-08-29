import React from "react"


const Items = (props) => {
  const renderItems = () => {
  return props.items.map((item)=>{
    return (
      <div>
        <h1>{item.name}</h1>
        <a href= {`/departments/${props.department.id}/items/${item.id}`}>View Item</a>
        <a href={`/departments/${props.department.id}/items/${item.id}/edit`}>Edit Item</a>
        <a href= {`/departments/${props.department.id}/items/${item.id}`} data-method="delete">Delete Item</a>
      </div>
    )
  })
}
return (
  <div className="header">
    <h1>{`${props.department.name} items:`}</h1>
    <a href="/departments">Home</a>
    <a href= {`/departments/${props.department.id}/items/new`}>Create New Item</a>
   {renderItems()}
   </div>
)
}

export default Items