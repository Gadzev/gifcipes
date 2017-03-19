import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../components/navbar';
import {Gifcipes} from '../../components/gifcipes';

import {helloWorldAction} from '../../store/actions';

const mapStateProps = state => ({
  user: state.auth.user,
});

const mapDispatchProps = dispatch => ({
  onClick: () => dispatch(helloWorldAction()),
});

const Home = ({user}) => (
  <div className="container-fluid">
    <Navbar user={user} current={'/'} />
    <Gifcipes />
  </div>
 );

 export default connect(mapStateProps, mapDispatchProps)(Home);
