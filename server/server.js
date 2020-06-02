const express = require('express')

const authRoutes = require('./routes/authRoutes')
const eventRoutes = require('./routes/eventRoutes')
const venueRoutes = require('./routes/venueRoutes')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1', authRoutes)
server.use('/api/v1/events', eventRoutes)
server.use('/api/v1/venues', venueRoutes)

module.exports = server
