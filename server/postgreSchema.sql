CREATE SCHEMA ReservationsModule;

CREATE TABLE ReservationsModule.Restaurants (
  id int not null unique,
  name str,
  open time,
  close time,
  num_seats int
)

CREATE TABLE ReservationsModule.Reservations (
  id int not null unique,
  restaurant_id int,
  user_id int,
  date date,
  time time,
  party_size tinyint
)

CREATE TABLE ReservationsModule.Users (
  id int not null unique,
  name str
)