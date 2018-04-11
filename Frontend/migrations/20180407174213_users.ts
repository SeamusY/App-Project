import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.createTable('users', (table)=>{
        table.increments();
        table.string("name").notNullable().unique();
        table.string("email").notNullable().unique();
    });
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTableIfExists('users');
};

