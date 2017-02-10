import React from 'react';

export default ({user}) => user ? (
  <div className="panel panel-default" key={user.id}>
    <div className="panel-heading">User: {user.login}</div>
    <div className="panel-body">
      Registration date: {user.registrationDate}
    </div>
  </div>
) : null;
