exports.up = knex => {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary
      table.string('name')
      table.string('image')
      table.string('username')
      table.string('email')
      table.string('hash')
      table.timestamps(true,true)
    })
  
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('users')
  }