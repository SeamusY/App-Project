const { Tag } = require('../../services');
const TAGS = require('../../services/tables').TAGS;
const knexFile = require('../../knexfile')['testing'];
const knex = require('knex')(knexFile);

describe('class Tag in services', () => {
    let tag;
    let sample = {
        tag_name: 'happy'
    };

    beforeEach((done) => {
        tag = new Tag(knex);
        knex(TAGS).del().then(() => done());
    })

    it('should create a tag', (done) => {
        tag.create(sample)
            .then(() => tag.list())
            .then((data) => {
                expect(data.length).toEqual(1);
                expect(data[0].tag_name).toEqual('happy');
                done();
            });
    });

    it('should delete a tag', (done) => {
        tag.create(sample)
            .then((id) => tag.delete(id[0]))
            .then(() => tag.list())
            .then((data) => {
                expect(data.length).toEqual(0);
                done();
            });
    });

    it('should search a tag \'s info', (done) => {
        tag.create(sample)
            .then(() => tag.search({ tag_name: 'happy' }))
            .then((data) => {
                expect(data[0]).toEqual(jasmine.objectContaining({tag_name: 'happy'}));
                done();
            });
    });
})
