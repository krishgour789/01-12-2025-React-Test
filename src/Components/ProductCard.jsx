import React from 'react'
import { useState } from 'react'

const ProductCard = () => {
  
  const [name,setName]=useState("");
  const change=(e)=>{
    setName(e.target.value);
  }
  const [city,setcity]=useState("");
  const city1=(e)=>{
    setcity(e.target.value);
  }


  return (
    <>
      Enter Name :<input type="text" onChange={change} />
      Your name:{name}
      <br /> <br />
      Enter Your City : <input type="text" onChange={city1} />
      Your City : {city}
    </>
  )
}

export default ProductCard