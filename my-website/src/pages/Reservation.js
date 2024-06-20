import React, {useEffect, useReducer} from 'react'
import BookingForm from '../components/BookingForm';
import './Reservation.css'

function updateTimes(availableTimes, action, date) {
 switch (action.type) {
   case "updateTimes":
     const check = fetchAPI(date);
     if(check.length > 0) {
       availableTimes = [...check] }
     else {
       availableTimes = [ '5:40 PM',
       '6:45 PM',
       '7:00 PM',
       '8:30 PM',
      '8:45PM'];
     }
     return availableTimes;
   default:
       return availableTimes;
 }
}


const initializeTimes = () => [
 '5:30 PM',
 '6:30 PM',
 '7:30 PM',
 '8:30 PM',
]


const fetchAPI = async (date) => {
   const response = await fetch(`https://raw.githubusercontent.com/courseraap/capstone/main/api.js`)
     const data = await response.json()
     console.log(data)
     return data;
 }; 




function Reservation() {
 const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());


 useEffect(() => {
   fetchAPI();
 }, []);


   return (
    <>
    <div className='form-header'>
    <h1>Book A Reservation with Us!</h1>
    <p>Join us for a delicious night for your tastebuds. Reserve your spot for a hassle free experience. We are open Mon-Fri 12:00PM to 9:00PM</p>
    </div>
     <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
     </>
   );
 }
 export default Reservation;

