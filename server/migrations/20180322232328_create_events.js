
exports.up = function (knex, Promise) {
    knex.schema.hasTable('events').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('events', function (t) {
                t.integer('user_id')
                t.string('location');
                t.dateTime('date');
                t.string('route');
                t.string('guests');
                t.boolean('status');
                t.timestamps(true, true);
            });
        }
    });
};

exports.down = function (knex, Promise) {
    knex.schema.dropTableIfExists('events')
};
