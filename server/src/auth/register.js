// our packages
import {User} from '../db';
import {hash, asyncRequest} from '../util';

export default (app) => {
  app.post('/api/register', asyncRequest(async(req, res) => {
    // get user input
    const {login, password, passwordRepeat} = req.body;
    let status;

    if (password !== passwordRepeat) {
      res.status(400).send({error: 'Passwords do not match!'});
      return;
    }

    // hash password
    const hashedPassword = hash(password);

    // check if login is already taken
    await User.findOne({username: login}, (err, doc) => {
      if (err) {
        throw err;
      }
      if (doc === null) {
        // TODO
      } else {
        status = {error: 'User already exists!'};
      }
    });
    if (status) {
      res.status(403).send({error: 'User already exists!'});
      return;
    }

    // save new user
    const user = new User({
      username: login,
      password: hashedPassword,
    });
    await user.save((err) => {
      if (err) throw err;
    });

    res.sendStatus(201);
  }));
};
