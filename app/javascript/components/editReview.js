import React from "react"

const EditReview = (props) => {
  return (
    <div className="header">
      <h1>Edit Review</h1>
      <div>
        <form action={`/items/${props.item.id}/reviews/${props.review.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
          <p>Edit Reveiw star rating</p>
          <input defaultValue={props.review.stars} name="review[stars]"/>
          <p>Edit Item Description</p>
          <textarea className="descriptioninput" defaultValue={props.review.body} name="review[body]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default EditReview