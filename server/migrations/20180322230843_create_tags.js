
exports.up = function (knex, Promise) {
    knex.schema.hasTable('tags').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('tags', function (t) {
                t.increments('id').primary();
                t.string('tag_name');
            });
        }
    });
};

exports.down = function (knex, Promise) {
    knex.schema.dropTableIfExists('tags')

};
