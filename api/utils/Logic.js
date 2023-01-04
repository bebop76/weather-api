const axios = require('axios')

const geoLocalizationLink = 'http://api.openweathermap.org/geo/1.0/'
const getWeatherLink = 'https://api.openweathermap.org/data/2.5/'
const getYelpInfoLink = 'https://api.yelp.com/v3/businesses/'
const openWeatherApiKey = '865a7989c8c93d644e49b503afe8e74d'
const yelpApiKey = "Ngn2nUV7d5ExJNWij2kIOZ50MEqR2jTIRkGCYB9B0OkedkNDHl1Ohp2ltgxjDyWCCAvIzgqRnJ5lpOetmj1EdFJBwN0u_LaKMHp56YC9nstVpIIJ7ZTzfvr0GCefY3Yx"

const getCoord = async (city, country) => {
    try {
        const findCoord = await axios(`${geoLocalizationLink}direct?q=${city},${country}&appid=${openWeatherApiKey}`) 
        if (findCoord.data.length === 0) {
            throw Error ('can not found city or country')
        }
        const weather = await getWeather(findCoord.data[0].lat, findCoord.data[0].lon, openWeatherApiKey)
        const yelpInfoData = await getYelpInfo(city)
        const finalInfo = {...weather, yelp:{...yelpInfoData}}
        return finalInfo

    } catch (error) {
        return {error: error.message}
    }
}

const getWeather = async (lat, lon, apiKey) => {
    const weather = await axios(`${getWeatherLink}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`)
    const weatherData = await weather.data
    return weatherData
}

const getYelpInfo = async (city) => {
    const config = {
    headers: { Authorization: `Bearer ${yelpApiKey}` }
    }
    const yelp = await axios(`${getYelpInfoLink}search?location=${city}`, config)
    const yelpInfo = await yelp.data
    return yelpInfo
} 

module.exports = { getCoord, getYelpInfo }