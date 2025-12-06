import React, { useState } from 'react'

const Question1 = () => {
    let [text,setText]=useState("");
    let Handle=(e)=>{
        e.preventDefault();
        setText(text);
    }

  return (
    <>
      <h1>Question One</h1>

   <form onSubmit={Handle}>
    Name : <input type="text" onChange={(e)=>{setText(e.target.value)}} />
    <button type='submit'>Click Here</button>
    </form>  
    <h1>{text}</h1>
    </>
  )
}

export default Question1
