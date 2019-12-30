const faker = require('faker');
const fs = require('fs');

const writeRestaurants = fs.createWriteStream('restaurants.csv');
writeRestaurants.write('id,name,open,close,num_seats,reservations\n', 'utf8');

const writeOneMillionRestaurants = (writer, encoding, callback) => {

  let i = 1000000;
  let id = 0;
  let seats = [40, 45, 50, 55, 60, 65, 70];

  const write = () => {
    let ok = true;

    do {
      i -= 1;
      id += 1;
      let name = faker.lorem.word();
      let clock = Math.floor(Math.random() * 12) + 1;
      let open = `${clock}:00`;
      let close = `${clock}:00`;
      let num_seats = seats[Math.floor(Math.random() * seats.length)];
      let reservations = 0;
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
