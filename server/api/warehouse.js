import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET warehouse listing. */
router.get('/warehouse', function (req, res, next) {
  const query = 'SELECT * FROM Warehouse;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(warehouse => {
      console.log(warehouse)
      res.json(warehouse)
    })
})

router.get('/warehouse/:warehouse_id', function (req, res, next) {
  console.log(req.query)
  const warehouse_id = req.params.warehouse_id
  console.log("ID:-------------------" + warehouse_id)
  const query = 'SELECT * FROM Warehouse WHERE warehouse_id = :warehouse_id ;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        warehouse_id: warehouse_id
      }
    })
    .then(warehouse => {
      if (warehouse.length === 1 ) {
        res.json(warehouse[0])
      } else {
        res.status(404).json({})
      }
    })
})

router.post('/warehouse/update', bodyParser.json(), function (req, res, next) {
  const warehouse_id = req.body.data.warehouse_id;
  const address = req.body.data.address;

  const query = 'UPDATE warehouse SET address = :address WHERE warehouse_id = :warehouse_id ;';
  connection.query(query, {
    type: connection.QueryTypes.UPDATE,
    replacements: {
      address: address,
      warehouse_id: warehouse_id
    }
  }).then (result => {
    // result[1] is the number of rows changed
    res.send('/warehouse');
  });
});

export default router
