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
       

        return (
        <form className="" style={{display: "grid", maxWidth: "200px", gap: "20px", justifyContent:"center"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}required>
           {availableTimes}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}required/>
        <label htmlFor="seating">Seating Preference</label>
        <select id="seating" value={seating} onChange={(e)=> setSeating(e.target.value)}>
                <option value="Patio">Patio</option>
                <option value="Bakery">Bakery</option>
                <option value="Indoor">Indoor</option>
            </select>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
           <option>Birthday</option>
           <option>Anniversary</option>
           <option>None</option>
        </select>
        <Button type="submit">Next</Button>
     </form>
    );
  }


  
  export default BookingForm;
