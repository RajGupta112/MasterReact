import React from 'react'

const Profle = (props) => {
  const {name,address}=props
  return (
    <div>
      <h1>{name}</h1>
      <h2>{address}</h2>
    </div>
  )
}

export default Profle
