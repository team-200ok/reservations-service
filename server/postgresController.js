const { Pool } = require('pg')

const pool = new Pool({ database: 'ReservationsModule' })

module.exports = {
  getReservations: {
    get: (req, res) => {
      pool.query(`SELECT * FROM reservations limit 5`, (err, result) => {
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
      pool.query(`INSERT INTO reservations VALUES (8000004, 70997, 122983, 'Monday', '06:30:00', 2)`, (err, result) => {
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