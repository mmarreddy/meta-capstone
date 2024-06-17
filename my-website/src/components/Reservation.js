import React, { useReducer} from 'react'
import BookingForm from './BookingForm';

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
        // You can update the state here based on the action
        // For now, let's just return the initial times array
        return action.times;
    default:
        return state;
  }
}


function Reservation() {

  const initializeTimes = () => {
    return ([
      "5:40 PM", 
      '6:05 PM',
      '7:00 PM',
      '7:30 PM',
      '8:00 PM',
      '8:45 PM'
    ])
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    return (
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    );
  }
  export default Reservation;