
exports.up = function(knex, Promise) {
    return knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('users', function(t) {
            t.increments('id').primary();
            t.string('gmail').unique();
            t.string('profile_image');
            t.string('first_name');
            t.string('last_name');
            t.timestamps(false, true);
          });
        }
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
  
};
