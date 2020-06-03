exports.up = knex => {
    return knex.schema.createTable('days', (table) => {
      table.increments('id').primary
      table.string('day')
      table.string('date')
      table.string('venue')
      table.string('event')
      table.string('artist1')
      table.string('artist2')
      table.string('artist3')
    })
  
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('days')
  }
