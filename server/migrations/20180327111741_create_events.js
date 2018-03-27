
exports.up = function (knex, Promise) {
    return knex.schema.hasTable('events').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('events', function (t) {
                t.increments('id').primary();
                t.integer('host_id');
                t.string('location');
                t.dateTime('date');
                t.string('route');
                t.boolean('status');
                t.timestamps(false, true);
            });
        }
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('events')
};
