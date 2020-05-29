const express = require('express')
const db = require('../db/events')
const router = express.Router()

router.get('/', (req, res) => {

    db.getEventList()
    .then(event => {
        res.json(event)
    })
})

module.exports = router