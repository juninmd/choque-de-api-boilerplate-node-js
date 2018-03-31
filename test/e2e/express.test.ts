import * as request from 'supertest';
import app from "../../src/app";

describe('/api ', () => {
    test('Online?', async (done) => {
        const response = await request(app)
            .get('/api/')
            .expect(200)

        expect(response.status).toBe(200);
        done();
    });
});
