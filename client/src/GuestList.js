import GuestInfo from "./GuestInfo";

const GuestList = ({guestBookings}) => {
    const listOfGuests = guestBookings.map((guest) =>{
        return <GuestInfo guest={guest} key={guest._id}/>
    });
    
    return (
        <>
        {listOfGuests}
        </>
  );
}

export default GuestList;