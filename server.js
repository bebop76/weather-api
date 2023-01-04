const express = require('express')
const app = express()
const weatherRoutes = require('./api/routes/weatherRoutes')
const weatherEveryRoutes = require('./api/routes/weatherEveryRoutes')

const PORT = 3000


app.use(express.json())


app.get('/', (req, res) => {
    res.json({message: "Welcome to my server!!"})
})

//rotte per città predefinite
app.use('/api/weather/city/',weatherRoutes)
//rotte per qualsiasi città
app.use('/api/weather/every/',weatherEveryRoutes)

app.get('*', (req, res ) => {
    res.status(404).send("page not found")
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))