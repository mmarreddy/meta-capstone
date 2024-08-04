
import React, {useState} from 'react'
import MenuData from '../components/MenuData';
import './styles/Menu.css'

const Menu = () => {

const [type, setType] = useState('main course');
const [heading, setHeading] = useState('Popular');

const handleClick = (type) => {
  setType(type);
  setHeading(type)
}


  return (
    <>
    <div className='button-container'>
   <button onClick={()=> handleClick('Dessert')}>Dessert</button>
    <button onClick={()=>handleClick('Main course')}>Main</button>
    <button onClick={()=>handleClick('Appetizers')}>Appetizers</button>
    <button onClick={()=>handleClick('Drinks')}>Drinks</button>
    </div>
    <h2>{heading}</h2>
    {type && <MenuData type={type}/>}
    </>
  )
}

export default Menu
