const USERS = require('./tables').USERS;

module.exports = class UserService {
    constructor(knex) {
        this.knex = knex;
    }

    create(user) {
        let query = this.knex.first('*').from(USERS).where('gmail', user.gmail)
        query.then((u) => {
            if (!u) {
                return this.knex.insert(user).into(USERS).returning("id");
            } else {
                return null;
            }
        })
    }
}