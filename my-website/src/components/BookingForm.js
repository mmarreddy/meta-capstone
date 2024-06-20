import React from 'react'
import Button from './Button';
import { useState } from 'react';

function BookingForm({availableTimes, dispatch}) {
    
        //state management
        const [date, setDate] = useState('');
        const [time, setTime] = useState('');
        const [guests, setGuests] = useState('');
        const [seating, setSeating] = useState('Patio');
        const [occasion, setOccasion] = useState('None');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const handleSubmit  = (e) => {
         e.preventDefault();
        }

        return (
        <form className="" onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", marginLeft:"40px", gap: "20px", justifyContent:"center"}}>
         <h1>Book A Reservation with Us!</h1>
        <label htmlFor="res-date">Choose date:</label>
        <input type="date" id="res-date" value={date} onChange={(e) => {
         let selectedDate =  e.target.value
         setDate(selectedDate); 
         dispatch({type:"updateTimes", payload: selectedDate})
        }} required/>
        <label htmlFor="res-time">Choose time:</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}required>
         {availableTimes.map((times, index) => 
         (<option key={index} value={times}>{times}</option>))
         } 
        </select>
        <label htmlFor="guests">Number of guests:</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}required/>
        {/* <label htmlFor="seating">Seating Preference</label>
        <select id="seating" value={seating} onChange={(e)=> setSeating(e.target.value)}>
                <option value="Patio">Patio</option>
                <option value="Bakery">Bakery</option>
                <option value="Indoor">Indoor</option>
            </select> */}
        <label htmlFor="name">Name:</label>
        <input type="textbox" placeholder='Name' id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder='email ID' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890' id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
           <option>Birthday</option>
           <option>Anniversary</option>
           <option>None</option>
        </select>
        <Button type="submit">Book Reservation</Button>
     </form>
    );
  }


  
  export default BookingForm;
