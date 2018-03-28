const PHOTOTAGS = require('./tables').PHOTOTAGS;

module.exports = class PhotoTag {
    constructor(knex) {
        this.knex = knex;
    }

    tag(photoId, tagId) {
        return this.knex
            .insert({
                'photo_id': userId,
                'tag_id': photoId
            })
            .into(PHOTOTAGS)
            .returning("id");
    }

    untag(photoId, tagId) {
        return this.knex(PHOTOTAGS)
            .where({
                'photo_id': photoId,
                'tag_id': tagId
            }).del();
    }

    list(limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(PHOTOTAGS)
            .limit(limit).offset(offset);
    }

    update(id, phototag) {
        return this.knex(PHOTOTAGS)
            .update(phototag)
            .where({
                'photo_id': photoId,
                'tag_id': tagId
            });
    }

    search(searchCriteria, limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(PHOTOTAGS)
            .where(searchCriteria)
            .limit(limit).offset(offset);
    }
}