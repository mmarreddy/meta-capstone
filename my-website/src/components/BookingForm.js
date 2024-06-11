import React from 'react'
import Button from './Button';

function BookingForm(props) {
    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required/>
        <label htmlFor="res-time">Choose time</label>
        <input type="time" id="res-time" required/>
        {/* <select id="res-time ">
           <option>5:30 PM</option>
           <option>6:00 PM</option>
           <option>7:00 PM</option>
           <option>7:30 PM</option>
           <option>8:00 PM</option>
           <option>8:45 PM</option>
        </select> */}
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" required/>
        <label htmlFor="seating">Seating Preference</label>
            <input type="radio" id="patio" name="seating" value="HTML"/>
            <label htmlFor="patio">Patio</label><br/>
            <input type="radio" id="bakery" name="seating" value="Bakery"/>
            <label htmlFor="bakery">Bakery</label><br/>
            <input type="radio" id="Indoor" name="seating" value="Indoor"/>
            <label htmlFor="Indoor">Indoor</label>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
           <option>Birthday</option>
           <option>Anniversary</option>
           <option>None</option>
        </select>
        <Button type="submit">Next</Button>
     </form>
    );
  }
  export default BookingForm;
