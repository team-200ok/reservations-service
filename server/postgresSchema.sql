CREATE SCHEMA ReservationsModule;

CREATE TABLE ReservationsModule.Restaurants (
  id int not null unique,
  name text,
  open time,
  close time,
  num_seats tinyint,
  reservations int
)

CREATE TABLE ReservationsModule.Reservations (
  id int not null unique,
  restaurant_id int,
  user_id int,
  date date,
  time time,
  party_size tinyint,
  FOREIGN KEY (restaurant_id) REFERENCES (restaurants),
  FOREIGN KEY (user_id) REFERENCES (users)
)

CREATE TABLE ReservationsModule.Users (
  id int not null unique,
  username text,
  firstName text,
  lastName text,
  email text,
  phoneNumber tinyint,
  note text
)