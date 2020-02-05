const faker = require('faker');

const seedMongo = () => {

  let mongo = [];
  let clock = Math.floor(Math.random() * 12) + 1;
  let counter = 0;
  
  for (let i = 0; i < 500000; i++) {
    let restaurants = {};
    let seats = [40, 45, 50, 55, 60, 65, 70];
  
    let name = faker.lorem.word();
    let open = `${clock}:00`;
    let close = `${clock}:00`;
    let num_seats = seats[Math.floor(Math.random() * seats.length)];
    let reservations = [];
    
    restaurants.id = i;
    restaurants.name = name;
    restaurants.open = open;
    restaurants.close = close;
    restaurants.num_seats = num_seats;
    
    let random = Math.floor(Math.random() * 10) + 1;
    
    for (var j = 0; j <= random; j++) {
      let reservation = {};

      let size = Math.floor(Math.random() * 10) + 1;
      let date = faker.date.weekday();
      let time = `${clock}:00`;
      let user = {};

      user.username = faker.internet.userName();
      user.firstName = faker.name.firstName();
      user.lastName = faker.name.lastName();
      user.email = faker.internet.email();
      user.phone_number = faker.phone.phoneNumber();
      user.note = faker.lorem.sentence();

      reservation.id = j;
      reservation.date = date;
      reservation.time = time;
      reservation.party_size = size;
      reservation.user = user;
      
      counter++;
      reservations.push(reservation);
    }

    mongo.push(restaurants);
  }

  return mongo;
}

module.exports = seedMongo;