import React from 'react'
import Button from './Button';
import { useState } from 'react';
import '../pages/styles/Reservation.css';
import { Link } from 'react-router-dom';
import { submitAPI } from './API';

function BookingForm({availableTimes, dispatch, submitForm}) {
        //state management
        const [date, setDate] = useState('');
        const [time, setTime] = useState('');
        const [guests, setGuests] = useState('');
        const [seating, setSeating] = useState('Patio');
        const [occasion, setOccasion] = useState('None');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');

        const allData = {date, time, guests, seating, occasion, name, email, phone}

        const handleSubmit  = (e) => {
         e.preventDefault();
          submitForm(allData);
        }

        return (
         <>
        <form className="form" onSubmit={handleSubmit} >
         <div className='form-items-container'>
         <div className="form-items">
            <label htmlFor="res-date">Choose date:</label>
            <input aria-label="Select date" type="date" id="res-date" value={date} onChange={(e) => {
               let selectedDate =  e.target.value
               setDate(selectedDate); 
               dispatch({type:"updateTimes", payload: selectedDate})
            }} required/>
            <label htmlFor="res-time">Choose time:</label>
            <select aria-label="Select time" id="res-time" value={time} onChange={(e) => setTime(e.target.value)}required>
               {availableTimes.map((times, index) => 
               (<option key={index} value={times}>{times}</option>))
               } 
            </select>
            <label htmlFor="guests">Number of guests:</label>
            <input type="number" placeholder="1" aria-label="number of guests" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}required/>
        <label htmlFor="seating">Seating Preference</label>
        <select aria-label="seating preference" id="seating" value={seating} onChange={(e)=> setSeating(e.target.value)}>
                <option value="Patio">Patio</option>
                <option value="Bakery">Bakery</option>
                <option value="Indoor">Indoor</option>
         </select> 
         </div>
         <div className="form-items">
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder='Name' aria-label="Your name" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder='email ID' aria-label="Your email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" aria-label="Your phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890' id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
        <label htmlFor="occasion">Occasion:</label>
        <select aria-label="Select occasion" id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
           <option>Birthday</option>
           <option>Anniversary</option>
           <option>None</option>
        </select>
        </div>
        </div>
        <div className= "booking-button">
       
        <Button type="submit">Book Reservation</Button>
        </div>
     </form>
     </>
    );
  }

  
  export default BookingForm;
