import React from 'react'

const ArrayOfObect = () => {
    let data = [{id:1,name:"Krish",city:"Sehore"},
        {id:1,name:"Krish",city:"Sehore"}
    ]
  return (
    <>
    <h1>Map</h1>

    {data.map((e)=>(
               <div key={e.id}>
                <h1>{e.name}</h1>
                <p>{e.city}</p>

               </div>
            ))}
    </>
            
        
  )
}

export default ArrayOfObect