import * as Knex from 'knex';

/**
 * User Service
 * -------------------------
 * Do Database Operations
 */
export default class UserService {
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex
    }

    list() {
        return this.knex('users').select();
    }

    findByEmail(email: string) {
        return this.knex('users').first().where("email", "=", email);
    }
}