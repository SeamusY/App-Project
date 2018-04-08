import * as Knex from "knex";

exports.seed = (knex: Knex) => {
    return knex("users").del()
        .then(function () {
            return knex("users").insert([
                { id: 1, name: "Michael", email: "michael@accelerating.tech"},
                { id: 2, name: "Gordon", email: "gordon@accelerating.tech"},
                { id: 3, name: "Alex",  email: "alex@accelerating.tech"}
            ]);
        });
};
