const router = require('express').Router()
const weatherControllers = require('../controllers/weatherControllers')

//GET Routes
router.get('/milano', weatherControllers.milano_get)
router.get('/torino', weatherControllers.torino_get)
router.get('/roma', weatherControllers.roma_get)
router.get('/bologna', weatherControllers.bologna_get)
router.get('/napoli', weatherControllers.napoli_get)

module.exports = router
