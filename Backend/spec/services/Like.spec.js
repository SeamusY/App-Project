const { LikeService, UserService, PhotoService } = require('../../services');
const { LIKES, USERS, PHOTOS } = require('../../services/tables');
const knexFile = require('../../knexfile')['testing'];
const knex = require('knex')(knexFile);

describe('class Like in services', () => {

    let userId, photoId, like;

    beforeEach((done) => {
        user = new UserService(knex);
        knex(USERS).del()
            .then(() => {
                user.create({
                    gmail: 'test1@gmail.com',
                    first_name: 'test',
                    last_name: 'last'
                })
                    .then(() => user.list())
                    .then((data) => { userId = data[0].id; })
                    .then(() => {
                        photo = new PhotoService(knex);
                        knex(PHOTOS).del()
                            .then(() => {
                                photo.create({
                                    user_id: userId,
                                    lat: 120.123456,
                                    lng: 120.123456,
                                    img_url: '/storage/1/test',
                                    caption: 'testcaption',
                                    location_name: 'testname',
                                    location_address: 'testaddress'
                                })
                                    .then(() => photo.list())
                                    .then((data) => {
                                        photoId = data[0].id;
                                    })
                                    .then( () => {
                                        like = new LikeService(knex);
                                        knex(LIKES).del().then(() => done());
                                    })
                            })
                    })
            })
    })

    xit('should attach a like to a photo', (done) => {
        like.like(userId, photoId)
            .then(() => like.list())
            .then((data) => {
                expect(data.length).toEqual(1);
                expect(data[0]).toEqual(userId, photoId);
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
