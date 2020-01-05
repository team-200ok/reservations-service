const { Pool } = require('pg')

const pool = new Pool({ database: 'ReservationsModule' })

module.exports = {
  getReservations: {
    get: (req, res) => {
      pool.query(`SELECT * FROM reservations limit 1`, (err, result) => {
        if (err) {
          console.error(`Error executing query ${err.stack}`)
          res.status(404).send(err);
        } else {
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      })
    }
  },

  postReservation: {
    post: (req, res) => {
      let id = 8000008;
      id++;
      pool.query(`INSERT INTO reservations VALUES (${id}, 10000, 10000, 'Saturday', '06:30:00', 2)`, (err, result) => {
        if (err) {
          console.error(`Error executing query ${err.stack}`)
          res.status(404).send(err);
        } else {
          console.log(result);
          res.status(200).send(result);
        }
      })
    }
  }
}

//   ; (async function () {
//     const client = await pool.connect()
//     await client.query('SELECT NOW()')
//     client.release()
//   })()

// const getReservations = () => {
//   return new Promise(function (resolve, reject) {
//     pool.query('SELECT * FROM reservations limit 5', (err, res) => {
//       if (res) {
//         resolve(pool);
//       } else {
//         reject();
//       }
//     })
//   })
// }