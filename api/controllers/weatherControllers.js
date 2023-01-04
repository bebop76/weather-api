const {getCoord} = require('../utils/Logic')

module.exports.torino_get = async (req, res ) => {
    const result = await getCoord("torino","it")
    res.json(result)
}
module.exports.milano_get = async (req, res ) => {
    const result = await getCoord("milano","it")
    res.json(result)
}
module.exports.bologna_get = async (req, res ) => {
    const result = await getCoord("bologna","it")
    res.json(result)
}
module.exports.roma_get = async (req, res ) => {
    const result = await getCoord("roma","it")
    res.json(result)
}
module.exports.napoli_get = async (req, res ) => {
    const result = await getCoord("napoli","it")
    res.json(result)
}
