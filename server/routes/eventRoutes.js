const express = require('express')
const db = require('../db/events')
const router = express.Router()

router.get('/', (req, res) => {

    db.getEventList()
    .then(events => {
        res.json(events)
    })
})


router.get('/events/:id', (req, res) => {
    
    let id = req.params.id
    db.getEventById(id)
        .then((events) => {
            res.json(events)
        })
    
})


module.exports = router