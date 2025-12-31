import axios from 'axios'
import React, { useState } from 'react'

const Jsonsave = () => {
    let [form,setform] = useState({
        name:"",
        age:"",
        email:""
    })
    let handleclick=(e)=>{
        setform({
            ...form,[e.target.name]:e.target.value

        })

    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        let valid = true;
        if(form.name.trim()===""){
            alert("Name is required");
            valid=false;
        }
        if (valid){
            let api = 'http://localhost:3000/userdata';
            axios.post(api,{...form}).then((res)=>{
                setform({
                    name: "",
                    age: "",
                    email: ""
                    });
                alert("Data Saved");
            });
        }
    }
      
       
  return (
    <>
    <h1>Json Save data</h1>
    <form onSubmit={handlesubmit}>
        name : <input type="text" name='name' value={form.name} onChange={handleclick} /> <br /> <br />
        age : <input type="text" name='age' value={form.age} onChange={handleclick} /> <br /> <br />
        email : <input type="text" name='email' value={form.email} onChange={handleclick} /> <br /> <br />

        <input type="submit" />
    </form>
    </>
  )
}

export default Jsonsave