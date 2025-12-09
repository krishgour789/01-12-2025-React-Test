import React from 'react'

const Map = () => {
    let Mydata = ["Sodhharth","Arun","Shivam","Raja"]
  return (
    <>
    <h1>Map</h1>
    <ul>
        {Mydata.map((e,i)=>(
            <li key={i}>{e}</li>
        ))}
    </ul>
    </>
  )
}

export default Map