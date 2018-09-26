
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {
          id: 1,
          title: "HELP!!!! I accidentally made a blackhole in my lab!",
          content: "I accidentally made a blackhole in my lab and it's destroying everything. How do I get it to stop?",
          username: "Ciaran",
          image: 'https://media.licdn.com/dms/image/C4E03AQG5J8hDZtk7LA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=iK99f--T3vo1zKip423cmtiHt_dwxDU2ZUo1sYqJpnI'
        },
        {
          id: 2,
          title: "My GC Machine isn't working",
          content: "It's been working all year and last month my sample results are off by 70%",
          username: "Matt",
          image: 'https://media.licdn.com/dms/image/C4E03AQGbxDLBp3_aDA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=GlGJAB43ufChB7c5Tb76BzG2ZPvBfK4w0H0dYmWqjoA'
        },
        {
          id: 3,
          title: "My PCRs aren't working",
          content: "I'm using a gradient PCR and I've tried 60, 70, 75, and 80 degrees celcius for the annealing process what am i doing wrong!",
          username: "Scienzeluvr",
          image: 'https://media.licdn.com/dms/image/C4E03AQGbxDLBp3_aDA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=GlGJAB43ufChB7c5Tb76BzG2ZPvBfK4w0H0dYmWqjoA'
        },
        {
          id: 4,
          title: "My RNA keeps degrading :(",
          content: "RNA is literally the worst. plz give me moral support",
          username: "Madsci3ntist",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE post_id_seq RESTART WITH 5;");
    });
};
