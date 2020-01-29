
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          title: "Weekend Plans",
          content: "At vero eos et."
        },
      ]);
    });
};
