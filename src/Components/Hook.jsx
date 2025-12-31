import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Hook = () => {
    let [students, setStudents] = useState([]);
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        let api = 'http://localhost:3000/Train'
        axios.get(api).then((res)=>{
            setStudents(res.data)

        }).catch((err)=>{
            console.log(err);
        })
    })

    
  return (
    <>
    <h1>Fetvh API</h1>
    <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>    
                <th>Course</th>
                <th>Batch</th>
            </tr>
        </thead>
        <tbody>
            {students.map((e)=>(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.adhar}</td>
                    <td>{e.totalfair}</td>

                </tr>
            ))}
        </tbody>
    </table>
    </>

  )
}

export default Hook
