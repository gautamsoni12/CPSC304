import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET employees listing. */
router.get('/employees', function (req, res, next) {
  const query = 'SELECT * FROM Employees;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(employees => {
      console.log(employees)
      res.json(employees)
    })
})

router.get('/employees/all_warehouses', function(req, res, next){
  const query = 'SELECT employees.fname , employees.lname , warehouse.address, warehouse.warehouse_id FROM employees INNER JOIN warehouse ON employees.warehouse_id=warehouse.warehouse_id;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(result => {
      console.log(result)
      res.json(result)
    })
})

export default router
