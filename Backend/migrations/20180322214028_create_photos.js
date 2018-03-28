
exports.up = function (knex, Promise) {
    return knex.schema.hasTable('photos').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('photos', function (t) {
                t.increments('id').primary();
                t.integer('user_id');
                t.decimal('lat', 9, 6);
                t.decimal('lng', 9, 6);
                t.string('img_url');
                t.string('caption');
                t.string('location_name');
                t.string('location_address');
                t.foreign('user_id').references('users.id');
                t.timestamps(false, true);;
            });
        }
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('photos')

};
