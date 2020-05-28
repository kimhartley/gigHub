exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1, 
          name: 'Boston',
          image: 'rowValue1',
          address: '20 Blair Street, Te Aro, Wellington 6011',
          description: 'rowValue1',
          phone: '04-384 9070',
          website: 'http://www.bostononblair.co.nz/page/home.aspx'
        },
        {
          id: 2, 
          name: 'Mish Mosh',
          image: 'rowValue2',
          address: '36 Courtenay Place, Te Aro, Wellington 6011',
          description: 'rowValue2',
          phone: '04-384 8015',
          website: 'https://www.mishmosh.bar/'
        },
        {
          id: 3, 
          name: 'Sassy Loves Cash',
          image: 'rowValue3',
          address: '24 Courtenay Place, Te Aro, Wellington 6011',
          description: 'rowValue3',
          phone: '04-384 8015',
          website: 'https://www.sassyloves.cash/#hello'
        }
      ])
    })
}
