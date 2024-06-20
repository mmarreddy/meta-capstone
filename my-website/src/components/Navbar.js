import React from 'react'
import{Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <nav className='nav'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
        </ul>
    </nav>
  )
}
