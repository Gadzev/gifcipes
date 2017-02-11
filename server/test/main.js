import test from 'tape';

// our packages
import {db as dbConfig} from '../config';
import {thinky, r} from '../src/db';

// tests
import core from './core';
import register from './register';
import login from './login';
import user from './user';
import logout from './logout';

export default (reqlite) => {
  thinky.dbReady().then(() => {
    // clean the database
    test(async (t) => {
      await r.db(dbConfig.db).table('User').delete();
      t.end();
    });

    // execute tests
    core(test);
    register(test);
    login(test);
    user(test);
    logout(test);

    // close db connections
    test((t) => {
      setImmediate(() => r.getPoolMaster().drain());
      reqlite.stop();
      t.end();
    });
  });
};
