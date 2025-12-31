import React, { useState } from 'react'

const calculator = () => {
    let [count,setcount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1> Simple Calculator   </h1>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        <button onClick={()=>{setcount(count-1)}}>-</button>

    </div>
  )
}

export default calculator