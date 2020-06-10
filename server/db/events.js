const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getEventList(db = connection) {
   
    return db('events')
    .select()
}

function getEvent(id, db = connection) {
    
    return db('events')
    .where('id', id)
    .then((events) => {
        return events[0]
    })
}

module.exports = {
    getEventList,
    getEvent
}