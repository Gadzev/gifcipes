import './passport';
import login from './login';
import register from './register';
import logout from './logout';

export default (app) => {
  login(app);
  register(app);
  logout(app);
};

export {loginTaken} from './register';
