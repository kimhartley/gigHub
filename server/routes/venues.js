const express = require('express')
const db = require('../db/lostDB')
const router = express.Router()

router.get('/', (req, res) => {

    db.getVenueList()
    .then(venue => {
        res.json(venue)
    })
})

module.exports = router