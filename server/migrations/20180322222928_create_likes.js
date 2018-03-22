
exports.up = function (knex, Promise) {
    knex.schema.hasTable('likes').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('likes', function (t) {
                t.integer('user_id');
                t.integer('photo_id');
                t.primary(['user_id', 'photo_id']);
                t.foreign('user_id').references('users.id');
                t.foreign('photo_id').references('photos.id');
                t.timestamps(true, false);
            });
        }
    });
};

exports.down = function (knex, Promise) {
    knex.schema.dropTableIfExists('likes')

};
