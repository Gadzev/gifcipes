import request from 'supertest';
import test from 'tape';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import app from '../src/app';
import {auth as authConfig} from '../config';

test('GET /api/user/:id', (t) => {
  request(app)
    .get(`/api/user/${app.get('user')._id}`)
    .set('x-access-token', app.get('token'))
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedBody = app.get('user');
      const actualBody = res.body;

      t.error(err, 'No error');
      t.deepEqual(actualBody, expetedBody, 'Retrieve user');

      t.end();
    });
});
