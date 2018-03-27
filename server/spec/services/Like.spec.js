const { Like, User } = require('../../services');
const LIKES = require('../../services/tables').LIKES;
const USERS = require('../../services/tables').USERS;
const knexFile = require('../../knexfile')['testing'];
const knex = require('knex')(knexFile);

describe('class Like in services', () => {
    beforeEach((done) => {
        user = new User(knex);
        knex(USERS).del()
        .then(user.create({
            gmail: 'test1@gmail.com',
            first_name: 'test',
            last_name: 'last'
        }))
            .then((data) => {
                console.log(data);
            })
            .then(() => done());
    })
    let like;
    let sample = {
        gmail: 'test@gmail.com',
        first_name: 'test',
        last_name: 'last'
    };

    beforeEach((done) => {
        like = new User(knex);
        knex(USERS).del().then(() => done());
    })

    it('should create a like', (done) => {
        like.create(sample)
            .then(() => like.list())
            .then((data) => {
                expect(data.length).toEqual(1);
                expect(data[0].gmail).toEqual('test@gmail.com');
                done();
            });
    });

    xit('should delete a like', (done) => {
        like.create(sample)
            .then((id) => like.delete(id[0]))
            .then(() => like.list())
            .then((data) => {
                expect(data.length).toEqual(0);
                done();
            });
    });

    xit('should update a like \'s info', (done) => {
        like.create(sample)
            .then((id) => like.update(id[0], { first_name: "newtest" }))
            .then(() => like.list())
            .then((data) => {
                expect(data[0].first_name).toEqual('newtest')
                done();
            });
    });

    xit('should search a like \'s info', (done) => {
        like.create(sample)
            .then(() => like.search({ gmail: 'test@gmail.com', first_name: 'test', last_name: 'last' }))
            .then((data) => {
                expect(data[0]).toEqual(jasmine.objectContaining({
                    gmail: 'test@gmail.com',
                    first_name: 'test',
                    last_name: 'last'
                }));
                done();
            });
    });
})
