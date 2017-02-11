/* eslint linebreak-style: ["error", "windows"]*/
// npm packages
import request from 'supertest';

// our packages
import app from '../src/app';

export default (test) => {
  test('Should log out', (t) => {
    request(app)
      .post('/api/logout')
      .expect(200)
      .end((err, res) => {
        const expectedBody = {message: 'Logout success'};
        const actualBody = res.body;

        t.error(err, 'No error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
};
