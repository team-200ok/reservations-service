DROP SCHEMA IF EXISTS ReservationsModule;
CREATE SCHEMA ReservationsModule;

SET client_min_messages = error;

CREATE TABLE IF NOT EXISTS Restaurants (
  id int not null unique primary key,
  name text,
  open time,
  close time,
  num_seats smallint,
  reservations int
);

CREATE TABLE IF NOT EXISTS Reservations (
  id int not null unique primary key,
  restaurant_id int,
  user_id int,
  date date,
  time time,
  party_size smallint,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS Users (
  id int not null unique primary key,
  username text,
  firstName text,
  lastName text,
  email text,
  phoneNumber smallint,
  note text
);

ANALYZE VERBOSE;

COPY restaurants(id,name,open,close,num_seats,reservations) 
FROM '/Users/keeyanakellydonaldson/Documents/team-200ok/reservations-service/restaurants.csv' DELIMITER ',' CSV HEADER;

