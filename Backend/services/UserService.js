const users = require('./tables').USERS;
const { NODE_ENV } = require('../config/server-config');
const knexFile = require('../knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);

module.exports = class userservice {
    constructor() {
        this.knex = knex;
    }

    create(user) {
        let query = this.knex.table(users).first('gmail').where('gmail', user.email);
        return query.then((u) => {
            if (!u) {
                return this.knex
                .insert({gmail: user.email, profile_image: user.picture, first_name: user.given_name, last_name: user.family_name})
                .into(users)
                .returning("id");
            } else {
                return null;
            }
        })
    }

    delete(userId) {
        return this.knex(users)
            .where("id", userId)
            .del();
    }

    list(limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(users)
            .limit(limit).offset(offset);
    }

    update(id, user) {
        return this.knex(users)
            .update(user)
            .where("id", id);
    }

    search(searchCriteria, limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(users)
            .where(searchCriteria)
            .limit(limit).offset(offset);
    }
    findid(email){
        return this.knex
            .select("user.id")
            .from(users)
            .where(email, "user.gmail")
    }
}