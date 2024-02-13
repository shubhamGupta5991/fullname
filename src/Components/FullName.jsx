import React, { useState } from 'react'

const FullfullName = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [isVisible,setIsVisible] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
    
   
  
    
  return (
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit} >
          <div>
          <label htmlFor="firstfullName">First Name:</label>
            <input type="text" name='firstfullName' required value={firstName}   onChange={(e)=>setFirstName(e.target.value)} />
          </div>
          <div>
          <label htmlFor="lastfullName">Last Name:</label>
            <input type="text" name='lastfullName' required value={lastName} onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <button type='submit' onClick={()=>(firstName && lastName )?setIsVisible(true):''}>Submit</button>
        </form>
        {isVisible?(<p>{`Full Name: ${firstName} ${lastName} `}</p>):('')}
        {/* <p>{isVisible?`Full Name: ${firstName} ${lastName}`:''}</p> */}
    </div>
  )
}

export default FullfullName