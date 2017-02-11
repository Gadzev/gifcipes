import React from 'react';
import {connect} from 'react-redux';

import {updateUser} from '../../store/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  updateUser: payload => dispatch(updateUser(payload)),
});


const User = ({user, edit, updateUser}) => {
  let userInput;

  const saveUser = () => {
    console.log('I was clicked');
    updateUser({
      ...user,
      login: userInput.value,
    });
  };

  return user ? (
    <div className="panel panel-default" key={user.id}>
      <div className="panel-heading">
        User: {edit ? (
          <input type="text" ref={i => {userInput = i;}} defaultValue={user.login} />
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
  ) : null;
};

export default connect(mapStateToProps, mapDispatchToProps)(User);