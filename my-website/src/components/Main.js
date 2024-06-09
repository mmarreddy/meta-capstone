import React from 'react'
import Cards from './Cards'
import Button from './Button'
import dish from "./assets/restauranfood.jpg"
const Main = () => {
  return (
    <div className='main'>

        <div className='main-section'>
          <div className='main-item'>
            <h1 style={{color: "#f4ce14"}}>Little Lemon</h1>
            <h2 style={{color: "#fff"}}>Chicago</h2>
            <p style={{width: "200px"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button>Reserve</Button>
          </div>
          <div className='main-item'>
            <img id="mainImg" src={dish} alt="Choux buns"></img>
          </div>
      </div>
      <div className='card-section'>
        <h1>This Weeks Specials!</h1>
        <Button>Online Menu</Button>
      </div>
        <Cards/>
    </div>
  )
}

export default Main
