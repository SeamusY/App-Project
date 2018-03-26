
exports.up = function (knex, Promise) {
    return knex.schema.hasTable('photo_tags').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('photo_tags', function (t) {
                t.integer('photo_id');
                t.integer('tag_id');
                t.primary(['photo_id', 'tag_id']);
                t.foreign('photo_id').references('photos.id');
                t.foreign('tag_id').references('tags.id');
                t.timestamps(true, false);
            });
        }
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('photo_tags')

};
