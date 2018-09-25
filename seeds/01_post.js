
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
          username: "cheeran"
        },
        {
          id: 2,
          title: "My GC Machine isn't working",
          content: "It's been working all year and last month my sample results are off by 70%",
          username: "matt"
        },
        {
          id: 3,
          title: "My PCRs aren't working",
          content: "I'm using a gradient PCR and I've tried 60, 70, 75, and 80 degrees celcius for the annealing process what am i doing wrong!",
          username: "scienzeluvr"
        },
        {
          id: 4,
          title: "My RNA keeps degrading :(",
          content: "RNA is literally the worst. plz give me moral support",
          username: "madsci3ntist"
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE post_id_seq RESTART WITH 5;");
    });
};
