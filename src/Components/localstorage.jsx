import React, { useState } from 'react'

const localstorage = () => {
    let [form,setform]=useState({
        name:"",
        email:""
    })
    let handleclick=(e)=>{
        setform({
            ...form,[e.target.name]:e.target.value

        })


    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("userData",JSON.stringify(form));
        alert("Data saved to local storage");
    }

       
  return (
    <>
    <h1>Local Storage Component</h1>
    <form onSubmit={handlesubmit}>
        Name : <input type="text" name='name' onChange={handleclick} /> <br /> <br />
        Email : <input type="email" name="email" onChange={handleclick} /> <br /> <br />
        <input type="submit" />
    </form>
    </>
  )
}

export default localstorage