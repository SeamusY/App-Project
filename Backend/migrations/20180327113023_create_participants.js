
exports.up = function (knex, Promise) {
    return knex.schema.hasTable('participants').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('participants', function (t) {
                t.integer('event_id');
                t.integer('user_id');
                t.primary(['event_id', 'user_id']);
                t.foreign('event_id').references('events.id');
                t.foreign('user_id').references('users.id');
                t.timestamps(false, true);
            });
        }
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('participants')

};