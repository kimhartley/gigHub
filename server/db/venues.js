const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getVenueList(db = connection) {
   
    return db('venues')
    .select()
}

function getVenue(id, db = connection) {
    
    return db('venues')
    .where('id',id)
    .then((venues) => {
        return venues[0]
    })
}

module.exports = {
    getVenueList,
    getVenue
}