import React from "react"


const Item = (props) => {
  const renderItem = () => {
    return(
    <div>
    <h1>{props.item.name}</h1>
    </div>
    )
  }
  return renderItem()
  }

export default Item