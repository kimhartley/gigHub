exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1, 
          name: 'rowValue1',
          image: 'rowValue1',
          venue: 'rowValue1',
          description: 'rowValue1',
          other: 'rowValue1'
        },
        {
          id: 2, 
          name: 'rowValue2',
          image: 'rowValue2',
          venue: 'rowValue2',
          description: 'rowValue2',
          other: 'rowValue2'
        },
        {
          id: 3, 
          name: 'rowValue3',
          image: 'rowValue3',
          venue: 'rowValue3',
          description: 'rowValue3',
          other: 'rowValue3'
        }
      ])
    })
}
