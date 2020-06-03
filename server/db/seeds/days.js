
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('days').del()
    .then(function () {
      // Inserts seed entries
      return knex('days').insert([
        {
          id: 1,
          day: 'Wednesday',
          date: 'September 19th',
          venue: 'Rain',
          event: 'The Jump Off',
          artist1: 'Ninja Steps 10-12',
          artist2: 'Klipz',
          artist3: 'D-Rail',
        },
        {
          id: 2,
          day: 'Thursday',
          date: 'January 30th',
          venue: 'Coyotes',
          event: 'Deluxx Thursday\'s',
          artist1: 'Jay-Oh',
          artist2: 'Blaze',
          artist3: 'Huntah'
        },
        {
          id: 3,
          day: 'Saturday',
          date: 'December 31st',
          venue: 'The Grand',
          event: 'NYE',
          artist1: 'Ninja Steps',
          artist2: 'Shan',
          artist3: 'Raw'
        }
      ])
    })
}
