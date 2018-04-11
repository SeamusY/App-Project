const { UserService } = require('../../services');
const USERS = require('../../services/tables').USERS;
const knexFile = require('../../knexfile')['testing'];
const knex = require('knex')(knexFile);

describe('class User in services', () => {
    let user;
    let sample = {
        gmail: 'test@gmail.com',
        first_name: 'test',
        last_name: 'last'
    };

    beforeEach((done) => {
        user = new UserService(knex);
        knex(USERS).del().then(() => done());
    })

    it('should create a user', (done) => {
        user.create(sample)
            .then(() => user.list())
            .then((data) => {
                expect(data.length).toEqual(1);
                expect(data[0].gmail).toEqual('test@gmail.com');
                done();
            });
    });

    it('should delete a user', (done) => {
        user.create(sample)
            .then((id) => user.delete(id[0]))
            .then(() => user.list())
            .then((data) => {
                expect(data.length).toEqual(0);
                done();
            });
    });

    it('should update a user \'s info', (done) => {
        user.create(sample)
            .then((id) => user.update(id[0], { first_name: "newtest" }))
            .then(() => user.list())
            .then((data) => {
                expect(data[0].first_name).toEqual('newtest')
                done();
            });
    });

    it('should search a user \'s info', (done) => {
        user.create(sample)
            .then(() => user.search({ gmail: 'test@gmail.com', first_name: 'test', last_name: 'last' }))
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
