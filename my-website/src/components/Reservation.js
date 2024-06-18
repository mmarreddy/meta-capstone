import React, { useReducer} from 'react'
import BookingForm from './BookingForm';

function updateTimes(availableTimes, action, ) {
  switch (action.type) {
    case "updateTimes":
        // You can update the state here based on the action
        // For now, let's just return the initial times array
        return availableTimes;
    default:
        return availableTimes;
  }
}

const initializeTimes = (data) => {

}

const fetchData = () => {
    fetch(`https://raw.githubusercontent.com/courseraap/capstone/main/api.js`) 
      .then((response) => response.json()) 
      .then((data) => initializeTimes(data)) 
      .catch((error) => console.log(error)); 
  };  

  useEffect(() => { 
    fetchData(); 
  }, []); 

function Reservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return (
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    );
  }
  export default Reservation;