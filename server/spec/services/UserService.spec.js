const { UserService } = require('../../services');
const USERS = require('../../services/tables').USERS;
const knexFile = require('../../knexfile')['testing'];
const knex = require('knex')(knexFile);

describe('UserService', () => {
    let userService;
    let sample = {
        gmail: 'test@gmail.com',
        first_name: 'test',
        last_name: 'last'
    };

    beforeEach((done) => {
        userService = new UserService(knex);
        knex(USERS).del().then(() => done());
    })

    it('should create a user', (done) => {
        userService.create(sample)
            .then(() => userService.list())
            .then((data) => {
                expect(data.length).toEqual(1);
                expect(data[0].gmail).toEqual('test@gmail.com');
                done();
            });
    });

    it('should delete a user', (done) => {
        userService.create(sample)
            .then((id) => userService.delete(id[0]))
            .then(() => userService.list())
            .then((data) => {
                expect(data.length).toEqual(0);
                done();
            });
    });

    it('should update a user info', (done) => {
        userService.create(sample)
            .then((id) => userService.update(id[0], { first_name: "newtest" }))
            .then(() => userService.list())
            .then((data) => {
                expect(data[0].first_name).toEqual('newtest')
                done();
            });
    });

    // it('should search a user info', (done) => {
    //     userService.create(sample)
    //         .then(() => userService.search({ gmail: 'test@gmail.com', first_name: 'test', last_name: 'last' }))
    //         .then((data) => {
    //             expect(Object.assign({}, data[0])).toContain({ gmail: 'test@gmail.com', first_name: 'test', last_name: 'last' })
    //             done();
    //         });
    // });
})
