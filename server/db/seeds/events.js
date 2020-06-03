exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1, 
          name: 'Superclub',
          image: 'rowValue1',
          venue: 'Shooters',
          description: '4 Area\'s, 4 genres ',
          other: 'Saturday Night'
        },
        {
          id: 2, 
          name: 'Boost Mobile Hook Up Tour',
          image: 'rowValue2',
          venue: 'TSB Arena',
          description: 'NZ HipHop Stand Up',
          other: 'Hoooook it up!'
        },
        {
          id: 3, 
          name: 'The Roots',
          image: 'rowValue3',
          venue: 'Town Hall',
          description: 'The best',
          other: 'No support'
        }
      ])
    })
}
