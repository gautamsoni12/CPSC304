import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET items listing. */
router.get('/items', function (req, res, next) {
  const query = 'SELECT * FROM Items;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(items => {
      console.log(items)
      res.json(items)
    })
})


router.post('/items/count', bodyParser.json(), function (req, res, next) {
  const category_name = req.body.data.category_name
  const query = 'SELECT Category.category_name, COUNT(Items.name) from Items INNER JOIN Category on Items.category_id=Category.category_id WHERE Category.name=:category_name;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        category_name: category_name
      }
    })
    .then(result => {
      console.log(result)
      res.send(JSON.stringify(result))
    })
})

export default router
