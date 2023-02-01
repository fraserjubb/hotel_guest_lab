const GuestInfo = ({guest}) => {
    return (
        <>
            <p>Guest: {guest.forename} {guest.surname}</p>
            <p>Contact Email: {guest.email}</p>
        </>
    )
}

export default GuestInfo