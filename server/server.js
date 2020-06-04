const express = require('express')

const authRoutes = require('./routes/authRoutes')
const eventRoutes = require('./routes/eventRoutes')
const venueRoutes = require('./routes/venueRoutes')
const daysRoutes = require('./routes/daysRoutes')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1', authRoutes)
server.use('/api/v1/events', eventRoutes)
server.use('/api/v1/venues', venueRoutes)
server.use('/api/v1/days', daysRoutes)

module.exports = server
