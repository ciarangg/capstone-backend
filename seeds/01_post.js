
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {
          id: 1,
          title: "HELP!!!! I accidentally made a blackhole!",
          content: "I accidentally made a blackhole in my lab and it's destroying everything. How do I get it to stop?",
          username: "Ciaran",
          image: 'https://media.licdn.com/dms/image/C4E03AQG5J8hDZtk7LA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=iK99f--T3vo1zKip423cmtiHt_dwxDU2ZUo1sYqJpnI'
        },
        {
          id: 2,
          title: "My GC Machine isn't working",
          content: "It's been working all year and last month my sample results are off by 70%. What could be going wrong?",
          username: "Matt",
          image: 'https://media.licdn.com/dms/image/C4E03AQGbxDLBp3_aDA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=GlGJAB43ufChB7c5Tb76BzG2ZPvBfK4w0H0dYmWqjoA'
        },
        {
          id: 3,
          title: "My PCRs aren't working",
          content: "I'm using a gradient PCR and I've tried 60, 70, 75, and 80 degrees celcius for the annealing process. I'm trying to amplify a 2000 bp long sequence. what am i doing wrong?",
          username: "Scienzeluvr",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijDcDsR9Ajpnpm6O_lAfnkcasMAYPHjx1nZ1-sgUhrmDeKV1H'
        },
        {
          id: 4,
          title: "Is there a safer way for me to handle ethidium bromide while running my gels?",
          content: "In my lab we have an ethidium bromide bench where we do all our ethidium bromide work! I don't know about you but that doesn't sound like the safest way to do things. I'm personally not a huge fan of cancer. Is there a safer way to do things that I can suggest to my boss?",
          username: "DrBowerman",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
        },
        {
          id: 5,
          title: "Do I have cancer?",
          content: "I have a tiny bump on the back of my ear I think I have cancer!",
          username: "Steve",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
        },
        {
          id: 6,
          title: "How do I do a joins table in knex?",
          content: "I don't even know what a joins table is. What's going on?",
          username: "ScienceIsCool",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
        },
        {
          id: 7,
          title: "Why is my -80 so ICY?",
          content: "It's usually not like this HELP. It's such a a nuisance",
          username: "FrodoBaggins,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
        },
        {
          id: 8,
          title: "I think all the radiation in this lab is giving me cancer",
          content: "I think I have cancer guys",
          username: "Dave",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
        },
        {
          id: 9,
          title: "My RNA keeps degrading :(",
          content: "RNA is literally the worst. I've gone through 1000 bottles of RNase away this month. At this rate it'll take me 20 years to get my phd. plz give me moral support",
          username: "Madsci3ntist",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
        }

      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE post_id_seq RESTART WITH 8;");
    });
};
