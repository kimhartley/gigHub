const express = require('express')
const db = require('../db/venues')
const router = express.Router()

router.get('/', (req, res) => {

    db.getVenueList()
    .then(venues => {
        res.json(venues)
    })
})

module.exports = router