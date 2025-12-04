import React, { useState } from 'react'

const Controlled = () => {
    let [name,setname] = useState("");
    let [email,setemail]=useState("");

    let Handle=(e)=>{
        e.preventDefault();
        console.log("Name :",name);
        console.log("Email :",email);
    }
    
  return (
    <>
    <h1 >Form Handling</h1>
    <form onSubmit={Handle}>
           Enter Name : <input type="text" onChange={(e=>{setname(e.target.value
           )})}
           /> <br /> 
           Enter Email : <input type="text" onChange={(e)=>{setemail(e.target.value)}} />
    <button type='submit'>Save data</button>
    </form>
    </>
  )
}

export default Controlled