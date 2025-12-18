import axios from "axios";
import React, { useEffect, useState } from "react";

const Datashow = () => {
  const [train,settrain] = useState([]);


  let fetch=()=>{
     axios.get("http://localhost:3000/Train")
      .then((res) => {
        settrain( res.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }
  useEffect(() => {
    fetch()

   

  }, []);
  let datadelete = (id) => {
    
    axios.delete(`http://localhost:3000/Train/${id}`)
      .then((res) => {
        alert("Booking cancelled");
        fetch()
      })

  }
  return (
    <>
      <div>
        <h1>Train Dashboard</h1>
        
          <table border='1'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>AdharCard</th>
                <th>Contact</th>
                <th>Passenger</th>
                <th>Fair</th>
                <th>Cancel</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
            {train.map((e) =>(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.adhar}</td>
                <td>{e.contact}</td>
                <td>{e.passenger}</td>
                <td>{e.totalfair*e.person}</td>
                <td onClick={()=>{datadelete(e.id)}}>Delete</td>
                 <td>
              <button onClick={() => setEditUser(user)}>Edit</button>
            </td>
              </tr>
            ))}

            </tbody>

          </table>
          </div>

          
          
       

     
    </>
  );
};

export default Datashow;
