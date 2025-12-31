import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App  from './Components/Controlled.jsx'
// import App  from './Components/TrainBookingapp.jsx'
// import App  from './Components/Home.jsx'
// import App  from './Components/Register.jsx'
// import App from './Map'

// import App from './Components/Valida'
// import App from './Components/Datashow'
// import App from './Components/calculator'
// import App from './Components/Todo'
// import App from './Components/Studentform'
// import App from './Components/CRUD'
// import App from './Components/Form'
// import App from './Components/Work'
import App from './Components/Jsonsave'

// import App from './Components/Useeffect'
// import App from './ArrayOfObect'
// import App  from './Components/Question2.jsx'
// import App  from './Components/word.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
  ,
)
