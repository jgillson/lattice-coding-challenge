const express = require('express')
const axios = require('axios')

const app = express()

const movieRoutes = require('./routes/movies')

app.use('/', movieRoutes)

app.listen(3000)
