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
})
