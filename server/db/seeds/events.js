exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1, 
          name: 'Superclub',
          image: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/24582-20652-14.jpg',
          venue: 'Shooters',
          description: '4 Area\'s, 4 genres ',
          other: 'Saturday Night'
        },
        {
          id: 2, 
          name: 'Boost Mobile Hook Up Tour',
          image: 'https://www.muzic.net.nz/images/uploaded_images_gigs/hookup_logo.jpg',
          venue: 'TSB Arena',
          description: 'NZ HipHop Stand Up',
          other: 'Hoooook it up!'
        },
        {
          id: 3, 
          name: 'The Roots',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcoBMYlGm3jn63BrK8UkxbMXAPogAzF5PViqbWmE20O9-hqCY0&usqp=CAU',
          venue: 'Town Hall',
          description: 'The best',
          other: 'No support'
        }
      ])
    })
}
