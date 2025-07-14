import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const ComponenetC = () => {
  const user=useContext(UserContext);
  return (
    <div>
      <h1>
     ComponentC
    </h1>
    <h1>{user.name}</h1>
    <h1>{user.email}</h1>
      
    </div>
  )
}

export default ComponenetC
