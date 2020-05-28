exports.up = knex => {
    return knex.schema.createTable('venues', (table) => {
      table.increments('id').primary
      table.string('name')
      table.string('image')
      table.string('address')
      table.string('description')
      table.string('phone')
      table.integer('website')
    })
  
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('venues')
  }