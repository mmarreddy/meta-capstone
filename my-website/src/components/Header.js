import React from 'react'
import logo from "./assets/Logo.svg"
import { Nav } from './Nav'
const Header = () => {
  return (
    <div className='header-container'>
        <img height={60} src={logo} alt="Little lemon logo"></img>
        <Nav/>
    </div>
  )
}
export default Header