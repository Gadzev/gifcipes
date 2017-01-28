import test from 'tape';
import request from 'supertest';
import mongoose from 'mongoose';

// our packages
import app from '../src/app';

test('GET /', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Hello, World!';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
});

test('404 on nonexistent URL', (t) => {
  request(app)
    .get('/GETShouldFailOnRandomURL')
    .expect(404)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Cannot GET /GETShouldFailOnRandomURL\n';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
});

test((t) => {
  mongoose.disconnect();
  t.end();
});
