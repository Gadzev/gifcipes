import request from 'supertest';
import test from 'tape';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import app from '../src/app';
import {auth as authConfig} from '../config';

test('Should login with existing username and password', (t) => {
  request(app)
    .post('/api/login')
    .send({login: 'test', password: '123'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actualBody = res.body;

      t.error(err, 'No error');
      t.ok(actualBody.user, 'User exists');
      t.ok(actualBody.token, 'Token exists');

      const decodedUser = jwt.verify(actualBody.token, authConfig.jwtSecret);
      delete decodedUser.iat;

      t.equal(actualBody.user.username, 'test', 'Login matches request');
      // TODO fix
      t.deepEqual(actualBody.user, decodedUser._doc, 'User must match token'); // eslint-disable-line

      app.set('token', actualBody.token);
      app.set('user', actualBody.user);

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
