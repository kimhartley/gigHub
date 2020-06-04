const express = require('express')
const db = require('../db/days')
const router = express.Router()

router.get('/', (req, res) => {

    db.getDays()
    .then(days => {
        res.json(days)
    })
})

module.exports = router