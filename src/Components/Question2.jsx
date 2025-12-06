import React from 'react'

const Question2 = () => {
    let fsize = 16;
    const Change = (e) =>{
        e.preventDefault();
        if(e.target.name === "inc"){
            fsize = fsize + 2;
            document.getElementById("font").style.fontSize = fsize + "px";
        }
        if(e.target.name === "dec"){
            fsize = fsize - 2;
            document.getElementById("font").style.fontSize = fsize + "px";
        }
        
    }

  return (
    <>
    <div>
    <h1 id='font' style={{fontSize:"16px"}}>This is Question 2</h1>
    <button name='inc' onClick={Change}>+</button>
    <button name='dec' onClick={Change}>-</button>
     </div>
    </>
  )
}

export default Question2
