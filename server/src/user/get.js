import passport from 'passport';

import {User} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/user/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => {
      if (err) {
        throw err;
      }
      if (user) {
        res.send(user);
      } else {
        res.status(400).send({error: 'User not found'});
      }
    });
  }));
};
