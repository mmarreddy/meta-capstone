import React from 'react'
import logo from "./assets/Logo.svg"
import { Navbar } from './Navbar'
const Header = () => {
  return (
    <header className='header-container'>
        <img height={60} src={logo} alt="Little lemon logo"></img>
        <Navbar/>
    </header>
  )
}
export default Header