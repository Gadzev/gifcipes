import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {updateUser, logoutUser} from '../../store/actions';

const mapStateToProps = state => ({
  redirectToHome: state.auth.redirectToHome,
});
const mapDispatchToProps = dispatch => ({
  updateUser: payload => dispatch(updateUser(payload)),
  logoutUser: payload => dispatch(logoutUser(payload)),
  navToHome: () => dispatch(push('/')),
});


const User = ({user, edit, updateUser, logoutUser, redirectToHome, navToHome}) => {
  let userInput;

  const saveUser = () => {
    console.log('I was clicked');
    updateUser({
      ...user,
      login: userInput.value,
    });
  };

  const logoutHandle = () => {
    console.log('Logout Clicked');
    logoutUser({
      ...user,
    });
  };

  if (redirectToHome) {
    setImmediate(() => navToHome());
  }

  return user ? (
   <div>
    <div className="panel panel-default" key={user.id}>
      <div className="panel-heading">
        User: {edit ? (
          <input type="text" ref={i => { userInput = i; }} defaultValue={user.login} />
        ) : user.login}

        {edit && (
          <div className="pull-right">
            <button className="btn btn-default" onClick={saveUser}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="panel-body">
        Registration date: {user.registrationDate}
      </div>
    </div>
    <div className="panel panel-default" >
      <div className="panel-body">
        <button className="btn btn-danger" onClick={logoutHandle}>
          Logout
        </button>
      </div>
    </div>
  </div>
  ) : null;
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
