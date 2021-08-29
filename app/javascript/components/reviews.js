import React from "react"


const Reviews = (props) => {
  const renderReviews = () => {
  return props.reviews.map((review)=>{
    return (
      <div>
        <h3>{`${review.stars} star review:`}</h3>
        <h4>{review.body}</h4>
        <a href={`/items/${props.item.id}/reviews/${review.id}/edit`}>Edit Review</a>
        <a href={`/items/${props.item.id}/reviews/${review.id}`} data-method="delete">Delete Review</a>
      </div>
    )
  })
}
return (
  <div className="header">
    <h1>{`${props.item.name} reviews:`}</h1>
    <a href={`/items/${props.item.id}/reviews/new`}>Add New Review</a>
    <a href={`/departments/${props.item.department_id}/items/${props.item.id}`}>Back</a> 
    {renderReviews()}
   </div>
  )
}

export default Reviews