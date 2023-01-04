const router = require('express').Router()
const weatherEveryControllers = require('../controllers/weatherEveryControllers')

//GET Routes
router.get('/:city/:country', weatherEveryControllers.every_get)

module.exports = router
