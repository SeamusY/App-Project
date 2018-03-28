const TAGS = require('./tables').TAGS;

module.exports = class Tag {
    constructor(knex) {
        this.knex = knex;
    }

    create(tag) {
        return this.knex
            .insert(tag)
            .into(TAGS)
            .returning("id");
    }

    delete(tagId) {
        return this.knex(TAGS)
            .where("id", tagId)
            .del();
    }

    list(limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(TAGS)
            .limit(limit).offset(offset);
    }

    search(searchCriteria, limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(TAGS)
            .where(searchCriteria)
            .limit(limit).offset(offset);
    }
}