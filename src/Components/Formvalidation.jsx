import React, { useState } from 'react'

const Formvalidation = () => {
    let [ form,setform]= useState({
        name:"",
        email : ""
    })
    let handleclick=(e)=>{
        setform({
            ...form,[e.target.name]:e.target.value
        })
    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        
        if(form.name.trim()==""){
            alert("Name is required");
            return;
        }
        if(form.email.trim()==""){
            alert("Email is required");
            return;
        }
        alert("Form submitted successfully");
        console.log("Data",form);
    }
  return (
    <>
    <h1>Form Validation Component</h1>
    <form onSubmit={handlesubmit}>
        Name : <input type="text" name='name' onChange={handleclick} /> <br /> <br />
        Email : <input type="email" name="email" onChange={handleclick} /> <br /> <br />
        <input type="submit" />
    </form>
    </>
  )
}

export default Formvalidation