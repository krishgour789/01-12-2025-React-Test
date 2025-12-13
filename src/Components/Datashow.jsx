import axios from "axios";
import React, { useEffect, useState } from "react";

const Datashow = () => {
  const [train,settrain] = useState([]);
  useEffect(() => {

    axios.get("http://localhost:3000/Train")
      .then((res) => {
        settrain( res.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });

  }, []);

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
              </tr>
            </thead>
            <tbody>
            {train.map((e) =>(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.Name}</td>
                <td>{e.Adharno}</td>
                <td>{e.Contact}</td>
                <td>{e.Passenger}</td>
                <td>{e.TotalFair}</td>
              </tr>
            ))}

            </tbody>

          </table>
          </div>
       

     
    </>
  );
};

export default Datashow;
