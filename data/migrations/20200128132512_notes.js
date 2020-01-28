
exports.up = function(knex) {
  return knex.schema.createTable('notes', note => {
      note.increment();
      note.string('title', 50).notNullable();
      note.string('content', 128).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('notes');
};
