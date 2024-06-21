import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom'; 
import BookingForm from '../components/BookingForm';
import './styles/Reservation.css';
import { fetchAPI, submitAPI } from '../components/API'; 

function updateTimes(availableTimes, action) {
  switch (action.type) {
    case 'updateTimes':
      const check = fetchAPI(new Date(action.payload)); 
      if (check.length > 0) {
        availableTimes = [...check];
      } else {
        availableTimes = ["Sorry, no tables available today :("];
      }
      return availableTimes;
    default:
      return availableTimes;
  }
}

const initializeTimes = (availableTimes) => {
  const todaysTimes = fetchAPI(new Date());
  availableTimes = todaysTimes;
  return availableTimes;
};

function Reservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate(); 
  
  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmation'); 
    }
  };

  return (
    <>
      <div className="form-header">
        <h1>Book A Reservation with Us!</h1>
        <p>
          Join us for a delicious night for your tastebuds. Reserve your spot for a hassle-free experience. We are open
          Mon-Fri 12:00PM to 9:00PM
        </p>
      </div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </>
  );
}

export default Reservation;