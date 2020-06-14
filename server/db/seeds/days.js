
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
        },
        {
          id: 4,
          day: 'Wednesday',
          date: 'June 17th',
          venue: 'Sin Bar',
          event: 'Student Night',
          artist1: 'Raw',
          artist2: 'K.O.S 163',
          artist3: 'Klipz'
        },
        {
          id: 5,
          day: 'Saturday',
          date: 'December 31st',
          venue: 'TSB Arena',
          event: 'Scribe and P-Money',
          artist1: 'Scribe',
          artist2: 'P-Money',
          artist3: 'Footsouljahs'
        },
        {
          id: 6,
          day: 'Sunday',
          date: 'June 14th',
          venue: 'Coyotes',
          event: 'Deceptikonz',
          artist1: 'Deceptikonz',
          artist2: 'Shady-1',
          artist3: 'Huntah'
        },
        {
          id: 7,
          day: 'Friday',
          date: 'October 7th',
          venue: 'Coyotes',
          event: 'Rumpshaker',
          artist1: 'Huntah/Jay-Oh',
          artist2: 'Infared/Sirvere',
          artist3: 'Raw/Blaze'
        },
        {
          id: 8,
          day: 'Monday',
          date: 'April 1st',
          venue: 'TSB Arena',
          event: 'Snoop Dogg',
          artist1: 'Snoop Dogg',
          artist2: 'Green Lantern',
          artist3: '-'
        },
        {
          id: 9,
          day: 'Tuesday',
          date: 'May 12th',
          venue: 'Coyotes',
          event: '-',
          artist1: 'Huntah',
          artist2: 'Jay-Oh',
          artist3: '-'
        }
      ])
    })
}
