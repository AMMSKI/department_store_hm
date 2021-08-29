import React from 'react'

const newDep = () => {
  return (
    <div className="header">
      <h1>New Department</h1>
      <a href="/">Home</a>
      <div>
        <form action="/departments" method="post">
          <p>New Department name</p>
          <input className="departmentinput" name="department[name]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default newDep