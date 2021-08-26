import React from 'react'

const newDep = () => {
  return (
    <div>
      <h1>New Department</h1>
      <div>
        <form action="/departments" method="post">
          <p>New Department name</p>
          <input name="department[name]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default newDep