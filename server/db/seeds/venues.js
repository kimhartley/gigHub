exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1, 
          name: 'rowValue1',
          image: 'rowValue1',
          address: 'rowValue1',
          description: 'rowValue1',
          phone: 'rowValue1',
          email: 'rowValue1'
        },
        {
          id: 2, 
          name: 'rowValue2',
          image: 'rowValue2',
          address: 'rowValue2',
          description: 'rowValue2',
          phone: 'rowValue2',
          email: 'rowValue2'
        },
        {
          id: 3, 
          name: 'rowValue3',
          image: 'rowValue3',
          address: 'rowValue3',
          description: 'rowValue3',
          phone: 'rowValue3',
          email: 'rowValue3'
        }
      ])
    })
}
