import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Navbar from '../../components/navbar';

import {helloWorldAction} from '../../store/actions';

const mapStateProps = state => ({
  user: state.auth.user,
});

const mapDispatchProps = dispatch => ({
  onClick: () => dispatch(helloWorldAction()),
});

const Home = ({user}) => (
  <div className="jumbotron">
    <Navbar user={user} current={'/'} />
  </div>
 );

 export default connect(mapStateProps, mapDispatchProps)(Home);
