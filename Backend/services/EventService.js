const EVENTS = require('./tables').EVENTS;

module.exports = class EventService {
    constructor(knex) {
        this.knex = knex;
    }

    create(event) {
        return this.knex
            .insert(event)
            .into(EVENTS)
            .returning("id");
    }

    delete(eventId) {
        return this.knex(EVENTS)
            .where("id", eventId)
            .del();
    }

    list(limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(EVENTS)
            .limit(limit).offset(offset);
    }

    update(id, event) {
        return this.knex(USERS)
            .update(user)
            .where("id", id);
    }

    search(searchCriteria, limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(USERS)
            .where(searchCriteria)
            .limit(limit).offset(offset);
    }
}