import crypto from 'crypto';

const auth = {
  passwordSalt: '1a4xJQBlM0yS6g4syo1Dmqch',
};

const hash = (str) => {
  const sum = crypto.createHas('sha256');
  sum.update(str + auth.passwordSalt);
  return sum.digest('hex');
};

export {hash as default};
