import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {registerAction} from '../../store/actions';

const mapStateProps = state => ({
  redirectToLogin: state.auth.redirectToLogin,
});

const mapDispatchProps = dispatch => ({
  navToLogin: () => dispatch(push('/login')),
  onLoginClick: params => dispatch(registerAction(params)),
});

export const Register = ({onLoginClick, navToLogin, redirectToLogin}) => {
    let usernameInput;
    let passwordInput;
    let passwordInputRepeat;

    const handleClick = (e) => {
        e.preventDefault();

        onLoginClick({
            login: usernameInput.value,
            password: passwordInput.value,
            passwordRepeat: passwordInputRepeat.value,
        });
    };

    if (redirectToLogin) {
      // TODO: figure out a better way to handle nav
      setImmediate(() => navToLogin());
    }

    return (
    <div className="jumbotron">
      <h2>Gifcipes portal:</h2>
      <p>Please Register. Or <Link to="/login">login</Link></p>

      <form>
        <div className="form-group">
          <label htmlFor="inputUsername">Username:</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            placeholder="Username"
            ref={(i) => { usernameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            ref={(i) => { passwordInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPasswordRepeat">Repeat Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordRepeat"
            placeholder="Repeat Password"
            ref={(i) => { passwordInputRepeat = i; }}
          />
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick}>Register</button>
      </form>
    </div>
  );
};

 export default connect(mapStateProps, mapDispatchProps)(Register);
