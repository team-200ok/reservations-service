const faker = require('faker');
// const { Restaurants } = require('./mongoSchema.js');

const seedMongo = () => {

  let mongo = [];
  let clock = Math.floor(Math.random() * 12) + 1;

  for (let i = 0; i < 1000; i++) {
    let restaurants = {};
    let seats = [40, 45, 50, 55, 60, 65, 70];

    let name = faker.lorem.word();
    let open = `${clock}:00`
    let close = `${clock}:00`
    let num_seats = seats[Math.floor(Math.random() * seats.length)];
    let reservations = [];

    restaurants.name = name;
    restaurants.open = open;
    restaurants.close = close;
    restaurants.num_seats = num_seats;

    for (var j = 0; j < 100; j++) {
      let reservation = {};

      let size = Math.floor(Math.random() * 10) + 1;
      let date = faker.date.future();
      let time = `${clock}:00`
      let user = {};

      reservation.date = date;
      reservation.time = time;
      reservation.party_size = size;
      reservation.user = user;

      reservations.push(reservation);
    }

    mongo.push(restaurants);
    return mongo;
  }
}

seedMongo();

module.exports.seedMongo = seedMongo;

// Add user properties

//       user: {
//         id: 0,
//         username: 'poopface',
//         firstName: 'poop',
//         lastName: 'pee',
//         email: 'poop@pee.com',
//         phone_number: '8009008000',
//         note: 'Hello world'
//       }
//     }