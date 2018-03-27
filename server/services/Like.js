const LIKES = require('./tables').LIKES;

module.exports = class Like {
    constructor(knex) {
        this.knex = knex;
    }

    like(userId, photoId) {
        return this.knex
            .insert({
                'user_id': userId,
                'photo_id': photoId
            })
            .into(LIKES)
            .returning("id");
    }

    unlike(userId, photoId) {
        return this.knex(LIKES)
            .where({
                'user_id': userId,
                'photo_id': photoId
            }).del();
    }

    list(limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(LIKES)
            .limit(limit).offset(offset);
    }

    search(searchCriteria, limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(LIKES)
            .where(searchCriteria)
            .limit(limit).offset(offset);
    }
}