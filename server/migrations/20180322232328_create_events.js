
exports.up = function (knex, Promise) {
    return knex.schema.hasTable('events').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('events', function (t) {
                t.integer('user_id')
                t.string('location');
                t.dateTime('date');
                t.string('route');
                t.string('guests');
                t.boolean('status');
                t.timestamps(false, true);
            });
        }
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('events')
};
