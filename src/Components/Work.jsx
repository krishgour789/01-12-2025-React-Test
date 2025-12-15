import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Work = () => {
    let [train,settrain] = useState([])
    

    useEffect(()=>{
        let api = 'http://localhost:3000/Train'
        axios.get(api).then((res)=>{
            settrain(res.data)
        }).catch((error)=>{
            console.log("Error",error)
        })
    },[])
  return (
    <>
    <h1>Train Dashboard</h1>
    <hr />
    <table border='1'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>TOtaiFair</th>
            </tr>
        </thead>
        <tbody>
            {train.map((e)=>(
                <tr key={e.id}>
                    <td>{e.Name}</td>
                    <td>{e.Contact}</td>
                    <td>{e.id}</td>

                </tr>
                
            ))}

            
        </tbody>
    </table>

    </>
  )
}

export default Work