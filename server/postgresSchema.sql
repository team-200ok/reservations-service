DROP SCHEMA IF EXISTS ReservationsModule;
CREATE SCHEMA ReservationsModule;

SET client_min_messages = error;

DROP TABLE IF EXISTS Restaurants CASCADE;
CREATE TABLE IF NOT EXISTS Restaurants (
  restaurant_id int not null,
  name text,
  open time,
  close time,
  num_seats smallint,
  reservations int,
  CONSTRAINT restaurant_id PRIMARY KEY (restaurant_id)
);

DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE IF NOT EXISTS Users (
  user_id int not null,
  username text,
  first_name text,
  last_name text,
  email text,
  phone_number text,
  note text,
  CONSTRAINT user_id PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS Reservations CASCADE;
-- ALTER TABLE IF EXISTS Reservations
--   DROP CONSTRAINT reservations_user_id_fkey;
-- ALTER TABLE IF EXISTS Reservations
--   DROP CONSTRAINT reservations_restaurant_id_fkey;
CREATE TABLE IF NOT EXISTS Reservations (
  reservation_id int not null,
  restaurant_id int,
  user_id int,
  date text,
  time time,
  party_size smallint,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  CONSTRAINT reservation_id PRIMARY KEY (reservation_id)
);

-- ANALYZE VERBOSE;

COPY restaurants(restaurant_id,name,open,close,num_seats,reservations) 
FROM '/Users/keeyanakellydonaldson/Documents/team-200ok/reservations-service/restaurants.csv' DELIMITER ',';

COPY users(user_id,username,first_name,last_name,email,phone_number,note)
FROM '/Users/keeyanakellydonaldson/Documents/team-200ok/reservations-service/users.csv' DELIMITER ',';

COPY reservations(reservation_id,restaurant_id,user_id,date,time,party_size)
FROM '/Users/keeyanakellydonaldson/Documents/team-200ok/reservations-service/reservations.csv' DELIMITER ',';

-- CREATE INDEX idx_restaurant_id ON reviews USING HASH (restaurant_id);