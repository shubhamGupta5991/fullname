import React, { useState } from 'react'

const FullName = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
  return (
    <div>
        <h1>Full Name Display</h1>
        <form action="">
          <div>
          <label htmlFor="name">First Name:</label>
            <input type="text" required value={firstName}/>
          </div>
          <div>
          <label htmlFor="name">Last Name:</label>
            <input type="text" required value={lastName}/>
          </div>
          <button>Submit</button>
        </form>
        <p></p>
    </div>
  )
}

export default FullName