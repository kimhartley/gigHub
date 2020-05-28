exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1, 
          name: 'Ninja',
          image: 'rowValue1',
          username: 'Ninja Steps',
          email: 'ninjasteps@gmail.com'
        }
        .map(user => {
          return generateHash(user.password)
            .then(hash => {
              user.hash = hash
              delete user.password
              return user
            })
        })
      ])
    })
}