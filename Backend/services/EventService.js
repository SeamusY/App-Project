const EVENTS = require('./tables').EVENTS;
const PARTICIPANTS = require('./tables').PARTICIPANTS;

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

    addUser(userId, eventId) {
        return this.knex
            .insert({
                'user_id': userId,
                'event_id': eventId
            })
            .into(PARTICIPANTS)
            .returning("id");
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