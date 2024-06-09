import React from 'react'
import logo from "./assets/Logo.svg"
import { Nav } from './Nav'
const Header = () => {
  return (
    <header className='header-container'>
        <img height={60} src={logo} alt="Little lemon logo"></img>
        <Nav/>
    </header>
  )
}
export default Header