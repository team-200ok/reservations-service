const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/restaurants';
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri).then(() => console.log('Connected to mango'));
const seedMongo = require('./seedMongo.js');

const Schema = mongoose.Schema;
const restaurantsSchema = new Schema({
  name: String,
  open: String,
  close: String,
  num_seats: Number,
  reservations: [
    {
      date: String,
      time: String,
      party_size: Number,
      user: {
        username: String,
        firstName: String,
        lastName: String,
        email: String,
        phone_number: String,
        note: String 
      }
    }
  ]
});

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

const insertData = () => {
  Restaurants.create(seedMongo())
    .then(() => console.log('Got the seed'));
};

insertData();

module.exports = Restaurants;