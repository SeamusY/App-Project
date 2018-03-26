const PHOTOS = require('./tables').PHOTOS;

module.exports = class Photo {
    constructor(knex) {
        this.knex = knex;
    }

    create(photo) {
        return this.knex
            .insert(photo)
            .into(PHOTOS)
            .returning("id");
    }

    delete(photoId) {
        return this.knex(PHOTOS)
            .where("id", photoId)
            .del();
    }

    list(limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(PHOTOS)
            .limit(limit).offset(offset);
    }

    update(id, photo) {
        return this.knex(PHOTOS)
            .update(photo)
            .where("id", id);
    }

    search(searchCriteria, limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(PHOTOS)
            .where(searchCriteria)
            .limit(limit).offset(offset);
    }
}