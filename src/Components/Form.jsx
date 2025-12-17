import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
  let [form,setform]=useState({
    
    name:"",
    adhar:"",
    contact:"",
    passenger:"",
    totalfair:"",
  })
  let handlechange = (e)=>{
    setform({...form,[e.target.name]:e.target.value});
  };
  let handlesubmit = (e) =>{
    e.preventDefault();
    let valid = true
    if (form.name.trim()==''){
      alert('Name cannot be empty')
      valid=false
    }
    if (valid){
      let api = 'http://localhost:3000/Train'
      axios.post(api, {...form,person:500}).then((res)=>{
        alert("Data Submitted")
      })
    }
  }
  return (
    <>
    <h1>FORM SUBMIT</h1>
    <form onSubmit={handlesubmit}>
        NAME : <input type="text" name='name' value={form.name} onChange={handlechange}/> <br />
        ADHAR : <input type="text" name='adhar' value={form.adhar} onChange={handlechange}/> <br />
        CONTACT : <input type="text" name='contact' value={form.contact} onChange={handlechange}/> <br />
        PASSENGER : <input type="text" name='passenger' value={form.passenger} onChange={handlechange}/> <br />
        TOTAL FAIR : <input type="text" name='totalfair' value={form.total} onChange={handlechange}/> <br />
        
        <input type="submit" />
    </form>
    </>
  )
}

export default Form