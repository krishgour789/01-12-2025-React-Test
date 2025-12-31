import React, { useState } from 'react'

const Studentform = () => {
    let [name,setname]= useState("");
    let [age,setage]= useState("");
    let [email,setemail]= useState("");

    let handlesubmit=(e)=>{
        alert(`Name : ${name} Age : ${age} Email : ${email}`);
        e.preventDefault();

    }
  return (
    <>
      <h1>Student form</h1>
      <form onSubmit={handlesubmit}>
        Name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
        Age : <input type="text" value={age} onChange={(e)=>{setage(e.target.value)}} />
        Email : <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} />

        <input type="submit" />
      </form>
    </>
  )
}

export default Studentform
