import crypto from 'crypto';

import {auth as authConfig} from '../../config';

export const hash = (str) => {
  const sum = crypto.createHash('sha256');
  sum.update(str + authConfig.passwordSalt);
  return sum.digest('hex');
};
