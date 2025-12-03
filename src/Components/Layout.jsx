import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
   

  return (
    
    <div>
        <nav>
            <h1>App</h1>
            <ul>
                <li><Link to='home'>Home</Link> </li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='contact'>Contact</Link></li>
                
            </ul>
        </nav>

        <main>
            <Outlet/>
        </main>

        <footer>
            Hello This is Footer

        </footer>
      
    </div>
  )
}

export default Layout
