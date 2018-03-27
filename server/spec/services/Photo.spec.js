const { Photo } = require('../../services');
const { User } = require('../../services');
const PHOTOS = require('../../services/tables').PHOTOS;
const knexFile = require('../../knexfile')['testing'];
const knex = require('knex')(knexFile);

describe('class Photo in services', () => {
    let photo;
    let sample = {
        lat: 120.123456,
        lng: 120.123456,
        img_url: '/storage/1/test',
        caption: 'testcaption',
        location_name: 'testname',
        location_address: 'testaddress'
    };

    // beforeAll((done) => {
    //     user = new User(knex);
    //     user.create({
    //         gmail: 'test@gmail.com',
    //         first_name: 'test',
    //         last_name: 'last'
    //     })
    //     .then((id) => {
    //         sample = {
    //             user_id: id,
    //             lat: 120.123456,
    //             lng: 120.123456,
    //             img_url: '/storage/1/test',
    //             caption: 'test caption',
    //             location_name: 'test name',
    //             location_address: 'test address'
    //         }
    //     })
    //     .then( () => done());
    // })

    beforeEach((done) => {
        photo = new Photo(knex);
        knex(PHOTOS).del().then(() => done());
    })

    it('should create a photo', (done) => {
        photo.create(sample)
            .then(() => photo.list())
            .then((data) => {
                expect(data.length).toEqual(1);
                console.log(data);
                expect(data[0]).toEqual(jasmine.objectContaining({
                    lat: '120.123456',
                    lng: '120.123456',
                    img_url: '/storage/1/test',
                    caption: 'testcaption',
                    location_name: 'testname',
                    location_address: 'testaddress'
                }));
                done();
            });
    });

    it('should delete a photo', (done) => {
        photo.create(sample)
            .then((id) => photo.delete(id[0]))
            .then(() => photo.list())
            .then((data) => {
                expect(data.length).toEqual(0);
                done();
            });
    });

    it('should update a photo \'s info', (done) => {
        photo.create(sample)
            .then((id) => photo.update(id[0], { caption: "newtest caption" }))
            .then(() => photo.list())
            .then((data) => {
                expect(data[0].caption).toEqual('newtest caption')
                done();
            });
    });

   it('should search a photo \'s info', (done) => {
        photo.create(sample)
            .then(() => photo.search({
                lat: 120.123456,
                lng: 120.123456,
                img_url: '/storage/1/test',
                caption: 'testcaption',
                location_name: 'testname',
                location_address: 'testaddress'
            }))
            .then((data) => {
                expect(data[0]).toEqual(jasmine.objectContaining({
                    lat: '120.123456',
                    lng: '120.123456',
                    img_url: '/storage/1/test',
                    caption: 'testcaption',
                    location_name: 'testname',
                    location_address: 'testaddress'
                }));
                done();
            });
    });
})
