import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1> Student Name : {props.name}</h1>
        <h1> Student Mark : {props.marks}</h1>
      
    </div>
  )
}

export default Card
