const { Pool } = require('pg')

const pool = new Pool({
  user: 'power_user',
  host: '54.82.182.53',
  database: 'reservationsmodule',
  password: 'powerroot',
  port: 5432
});

// const pool = new Pool({
//   database: 'ReservationsModule'
// });

module.exports = {
  getReservations: {
    get: (req, res) => {
      pool.query(`SELECT r.date, r.time, r.party_size
      FROM reservations as r INNER JOIN restaurants as rt
      on rt.restaurant_id = r.restaurant_id 
      WHERE r.reservation_id = ${req.params.id}`, (err, result) => {
        if (err) {
          console.error(`Error executing query ${err.stack}`)
          res.status(404).send(err);
        } else {
          res.status(200).send(result.rows);
        }
      });
    }
  }
}