const {getCoord} = require('../utils/Logic')

module.exports.every_get = async (req, res ) => {
    const {city, country } = req.params
    const result = await getCoord(city, country)
    res.json(result)
}