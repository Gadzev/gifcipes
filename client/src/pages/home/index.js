import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {helloWorldAction} from '../../store/actions';

const mapStateProps = state => ({
  world: state.helloWorld.world,
});

const mapDispatchProps = dispatch => ({
  onClick: () => dispatch(helloWorldAction()),
});

const Home = ({onClick, world}) => (
  <div className="jumbotron">
    <h1>Hello {world}!</h1>
    <button className="btn btn-default" onClick={onClick}>Click me!</button>
    <div>
      <Link to="/login">Login</Link>
    </div>
  </div>
 );

 export default connect(mapStateProps, mapDispatchProps)(Home);
