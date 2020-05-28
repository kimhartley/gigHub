const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getEventList(db = connection) {
   
    return db('event')
    .select()
}

function getEventById(id, db = connection) {
    
    return db('event')
    .where('id',id)
    .then((event) => {
        return event[0]
    })
}

module.exports = {
    getEventList,
    getEventById
}