import React from 'react'
import '../cssComponent/Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='icon'>
          <h2 className='logo'>Time</h2>
        </div>
        <div className='menu'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className='search'>
          <input type="text" className='inpt' placeholder='Enter here'/>
         <a href="/"><button className='btn'>Search</button></a>

        </div>
      </div>
    </>

  )
}

export default Navbar