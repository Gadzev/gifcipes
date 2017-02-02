exports.db = {
    host: process.env.GIFCIPES_DB_URL || 'localhost',
    port: process.env.GIFCIPES_DB_PORT || 28015,
    db: 'gifcipesdb',
};

exports.auth = {
  passwordSalt: process.env.GIFCIPES_AUTH_PASSSALT ||
      '1a4xJQBlM0yS6g4syo1Dmqch',
  sessionSecret: process.env.GIFCIPES_AUTH_SESSECRET ||
      'WLqydVMz4fE15jx1bqe9TuRT',
  jwtSecret: process.env.GIFCIPES_AUTH_JWTSECRET ||
      'lDcvkT4axMWkfx2lmpaeDJIe',
};
