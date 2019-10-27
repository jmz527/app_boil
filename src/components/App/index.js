// Main Imports
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom Imports
import Layout from '~/components/Layout';
import PrivateRoute from '~/components/PrivateRoute';
import * as actionCreators from '~/store/actions';

// Page Imports
import HomePage from '~/pages/home';
import AboutPage from '~/pages/about';
import LoginPage from '~/pages/login';
import TopicsPage from '~/pages/topics';
import PrivatePage from '~/pages/private';

// Style Imports
// import './index.scss';

const App = (props) => (
  <div className='app'>
    <Layout {...props}>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/topics' component={TopicsPage}/>
        <PrivateRoute path='/private' component={PrivatePage}/>
      </Switch>
    </Layout>
  </div>
);
App.propTypes = {
  loginSuccess: PropTypes.bool,
  currentUser: PropTypes.object,
  authorizeUserSuccess: PropTypes.func,
  authorizeUserFailure: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.user.loginSuccess,
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authorizeUserSuccess: () => dispatch(actionCreators.authorizeUserSuccess()),
    authorizeUserFailure: () => dispatch(actionCreators.authorizeUserFailure())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
