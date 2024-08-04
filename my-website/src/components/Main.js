import React from 'react'
import Cards from './Cards'
import Button from './Button'
import dish from "../assets/restauranfood.jpg"
import { Link } from 'react-router-dom'
import '../pages/styles/index.css';
const Main = () => {
  return (
    <div className='main'>

        <div className='main-section'>
          <div className='main-item'>
            <h1 style={{color: "#f4ce14"}}>Little Lemon</h1>
            <h2 style={{color: "#fff"}}>Chicago</h2>
            <p style={{width: "200px"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/reservations">
            <Button>Reserve</Button>
            </Link>
          </div>
          <div className='main-item'>
            <img id="mainImg" src={dish} alt="Choux buns"></img>
          </div>
      </div>
      <div className='card-section'>
        <h1>This Weeks Specials!</h1>
        <Link to="/menu">
        <Button>Online Menu</Button>
        </Link>
      </div>
        <Cards/>
    </div>
  )
}

export default Main
