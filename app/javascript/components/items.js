import React from "react"


const Items = (props) => {
  const renderItems = () => {
  return props.items.map((item)=>{
    return (
      <div>
        <h1>{item.name}</h1>
        <a href= {`/departments/${props.department.id}/items/${item.id}`}>View Item</a>
      </div>
    )
  })
}
return (
  <div>
    <h1>{`${props.department.name} items:`}</h1>
   {renderItems()}
   </div>
)
}

export default Items