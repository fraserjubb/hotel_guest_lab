import { useState, useEffect } from "react";
import './App.css';

import { getBookings } from "./BookingsService";

function App() {
  
  const [guestBookings, setGuestBookings] = useState([]);
  
  useEffect(() => {
    getBookings().then((allBookings) => {
      setGuestBookings(allBookings);
    })
  }, []);


  return (
        <div>
          {guestBookings.map((guest)=> {
            return (
              <>
              <p>Guest: {guest.forename} {guest.surname}</p>
              <p>Contact Email: {guest.email}</p>
              </>
            )
          })}
        </div>

  );
}

export default App;
