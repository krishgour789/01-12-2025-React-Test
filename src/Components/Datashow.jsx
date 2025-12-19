import axios from "axios";
import React, { useEffect, useState } from "react";

const Datashow = () => {
  let [form,setform]=useState({
      
      name:"",
      adhar:"",
      contact:"",
      passenger:"",
      
    })
  const [train,settrain] = useState([]);
  let [editID,seteditID]  = useState(null)
  let [search,setsearch] = useState("")

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


        let formopen=(e)=>{
      seteditID(e.id)
      setform({name:e.name,adhar:e.adhar,contact:e.contact,passenger:e.passenger,totalfair:e.totalfair})
    }
    let handlechange = (e)=>{
    setform({...form,[e.target.name]:e.target.value});
  };
  let handlesubmit = (e) =>{
    e.preventDefault();
    
      let api = `http://localhost:3000/Train/${editID}`
      axios.put(api, {...form,person:500}).then((res)=>{
        fetch()
        editID(null)
        
      })
      
    let Filterdata= train.filter((e)=>{
      return e.name.toLowerCase().includes(search.toLocaleLowerCase())
    })

  }
  return (
    <>
      <div>
        <h1>Train Dashboard</h1>  <br />
        Search : <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
        
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
                <td>{e.passenger*e.person}</td>
                <td onClick={()=>{datadelete(e.id)}}>Delete</td>
                 <td>
              <button onClick={() => {formopen(e)}}>Edit</button>
            </td>
              </tr>
            ))}

            </tbody>

          </table>

            {editID && (
                 <form onSubmit={handlesubmit}>
        NAME : <input type="text" name='name' value={form.name} onChange={handlechange}/> <br />
        ADHAR : <input type="text" name='adhar' value={form.adhar} onChange={handlechange}/> <br />
        CONTACT : <input type="text" name='contact' value={form.contact} onChange={handlechange}/> <br />
        PASSENGER : <input type="text" name='passenger' value={form.passenger} onChange={handlechange}/> <br />
        {/* TOTAL FAIR : <input type="text" name='totalfair' value={form.total} onChange={handlechange}/> <br /> */}
        
        <input type="submit" />
    </form>
            )}


          </div>

          
          
       

     
    </>
  );
};

export default Datashow;
