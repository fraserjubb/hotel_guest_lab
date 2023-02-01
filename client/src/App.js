import { useState, useEffect } from "react";
import './App.css';

import { getBookings } from "./BookingsService";
import GuestList from "./GuestList"; 

function App() {
  
  const [guestBookings, setGuestBookings] = useState([]);
  
  useEffect(() => {
    getBookings().then((allBookings) => {
      setGuestBookings(allBookings);
    })
  }, []);


  return (
    <GuestList guestBookings={guestBookings}></GuestList>
  )
}

export default App;
