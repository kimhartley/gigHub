const express = require('express')
const db = require('../db/events')
const router = express.Router()

router.get('/', (req, res) => {

    db.getEventList()
    .then(events => {
        res.json(events)
    })
})


router.get('/events/:eventsId', (req, res) => {
    
    let id = req.params.eventsId
    db.getEvent(id)
        .then((events) => {
            res.json(events)
        })
    
})

router.get('/:eventsId', (req,res) => {
    let id = req.params.eventsId
    db.getEvent(id)
    .then((events) => {
        res.json(events)
    })
    
})

module.exports = router