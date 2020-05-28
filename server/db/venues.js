const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getVenueList(db = connection) {
   
    return db('venue')
    .select()
}

function getVenueById(id, db = connection) {
    
    return db('venue')
    .where('id',id)
    .then((venue) => {
        return venue[0]
    })
}

module.exports = {
    getVenueList,
    getVenueById
}