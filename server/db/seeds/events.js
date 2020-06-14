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
        },
        {
          id: 4, 
          name: 'Scribe and P-Money',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png',
          venue: 'TSB Arena',
          description: '2003 NYE',
          other: '-'
        },
        {
          id: 5, 
          name: 'Student Night',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png',
          venue: 'Sin Bar',
          description: 'Lesssss gooooo',
          other: 'See you after Vintage'
        },
        {
          id: 6, 
          name: 'Rumpshaker',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png',
          venue: 'Coyotes',
          description: '70\'s-90\'s Hiphop and Rnb bangers',
          other: 'Rolling 20 Deep'
        }
      ])
    })
}
