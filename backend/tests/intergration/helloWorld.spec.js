const request = require('supertest');
const app = require('../../src/server');

describe('HelloWorld', () => {
    beforeEach(async() => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

    it('GET Hello World', async() => {
        const response = await request(app).get('/').send();
        expect(response.body).toHaveProperty('message');
        expect(response.body.id).toHaveLength(8);
    });
});