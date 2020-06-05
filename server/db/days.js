const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getDayList(db = connection) {
   
    return db('days')
    .select()
}

function getDay(id, db = connection) {
    
    return db('days')
    .where('id',id)
    .then((days) => {
        return days[0]
    })
}

module.exports = {
    getDay,
    getDayList
}