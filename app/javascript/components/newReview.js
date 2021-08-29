import React from "react"

const NewReview = (props) => {
  return (
    <div className="header">
      <h1>{`Add New Review for ${props.item.name}`} </h1>
      <div>
        <form action={`/items/${props.item.id}/reviews/`} method="post">
          <p>New Reveiw star rating</p>
          <input name="review[stars]"/>
          <p>New Review Description</p>
          <textarea className="descriptioninput" name="review[body]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default NewReview