import request from 'supertest';
import test from 'tape';
import mongoose from 'mongoose';

import app from '../src/app';

test('Should login with existing username and password', (t) => {
  request(app)
    .post('/api/login')
    .send({login: 'test', password: '123'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actualBody = res.body;

      t.error(err, 'No error');
      t.ok(actualBody, 'User.exists');
      t.equal(actualBody.username, 'test', 'Login matches request');
      t.end();
    });
});

test('Should fail to login with wrong password', (t) => {
  request(app)
    .post('/api/login')
    .send({login: 'test', password: 'aaaa'})
    .expect(401)
    .end((err) => {
      t.error(err, 'No error');
      t.end();
    });
});

test('Should fail to login with non existent user', (t) => {
  request(app)
    .post('/api/login')
    .send({login: 'doesntexist', password: '123'})
    .expect(401)
    .end((err) => {
      t.error(err, 'No error');
      t.end();
    });
});

test((t) => {
  mongoose.disconnect();
  t.end();
});
