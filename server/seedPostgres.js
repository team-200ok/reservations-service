const faker = require('faker');
const fs = require('fs');

const writeRestaurants = fs.createWriteStream('restaurants.csv');
writeRestaurants.write('id,name,open,close,num_seats,reservations\n', 'utf8');

const writeOneMillionRestaurants = (writer, encoding, callback) => {

  let i = 1000000;
  let id = 0;
  let seats = [40, 45, 50, 55, 60, 65, 70];

  const write = () => {
    console.log(`One million's at ${i}`);
    let ok = true;

    do {
      i -= 1;
      id += 1;
      let name = faker.lorem.word();
      let clock = Math.floor(Math.random() * 12) + 1;
      let open = `${clock}:00`;
      let close = `${clock}:00`;
      let num_seats = seats[Math.floor(Math.random() * seats.length)];
      let reservations = Math.floor(Math.random() * 8000000);
      let data = `${id},${name},${open},${close},${num_seats},${reservations}\n`


      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }

  write();
}

writeOneMillionRestaurants(writeRestaurants, 'utf-8', () => {
  writeRestaurants.end();
});

const writeReservations = fs.createWriteStream('reservations.csv');
writeReservations.write('id,restaurant_id,user_id,date,time,party_size\n', 'utf8');

writeEightMillionReservations = (writer, encoding, callback) => {
  let i = 8000000;
  let id = 0;

  const write = () => {
    console.log(`Eight million's at ${i}`);
    let ok = true;

    do {
      i -= 1;
      id += 1;
      let restaurant_id = Math.floor(Math.random() * 1000000) + 1;
      let user_id = Math.floor(Math.random() * 1000000) + 1;
      let date = faker.date.weekday();
      let clock = Math.floor(Math.random() * 12) + 1;
      let time = `${clock}:00`;
      let party_size = Math.floor(Math.random() * 10) + 1;
      let data = `${id},${restaurant_id},${user_id},${date},${time},${party_size}\n`

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }

  write();
}

writeEightMillionReservations(writeReservations, 'utf-8', () => {
  writeReservations.end();
})

const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('id,username,first_name,last_name,email,phone_number, note\n', 'utf8');

writeOneMillionUsers = (writer, encoding, callback) => {
  let i = 1000000;
  let id = 0;

  const write = () => {
    console.log(`One million's at ${i}`);
    let ok = true;

    do {
      i -= 1;
      id += 1;
      let username = faker.internet.userName();
      let first_name = faker.name.firstName();
      let last_name = faker.name.lastName();
      let email = faker.internet.email();
      let phone_number = faker.phone.phoneNumber();
      let note = faker.lorem.sentence();
      let data = `${id},${username},${first_name},${last_name},${email},${phone_number},${note}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }

  write();
}

writeOneMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});