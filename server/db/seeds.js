use hotelBookings
db.dropDatabase()

db.hotelguests.insertMany([
    {
        forename: "George",
        surname: "Clooney",
        email: "george.clooney@email.com"
    },
    {
        name: "Peter",
        surname: "Parker",
        email: "spiderman@email.com"
    }
])

