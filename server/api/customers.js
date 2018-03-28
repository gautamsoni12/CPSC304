import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET customers listing. */
router.get('/customers', function (req, res, next) {
  const query = 'SELECT * FROM Customers;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(customers => {
      console.log(customers)
      res.json(customers)
    })
})

router.post('/customers/name', bodyParser.json(), function (req, res, next) {
  console.log("HERE-------------------");
  const name = req.body.data.name
  const query = 'SELECT name,phone,address from Customers WHERE name = :name;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        name: name
      }
    })
    .then(result => {
      console.log(result)
      res.send(JSON.stringify(result))
    })
})

export default router
