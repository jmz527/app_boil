// Main Imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom Imports
import Layout from '~/components/Layout';
import PrivateRoute from '~/components/PrivateRoute';

// Page Imports
import HomePage from '~/pages/home';
import AboutPage from '~/pages/about';
import PrivatePage from '~/pages/private';

// Container Imports
import LoginPage from '~/containers/pages/login';
import TopicsPage from '~/containers/pages/topics';

// Style Imports
// import './index.scss';

const app = (props) => (
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
app.propTypes = {
  loginSuccess: PropTypes.bool,
  currentUser: PropTypes.object,
  authorizeUserSuccess: PropTypes.func,
  authorizeUserFailure: PropTypes.func
};

export default app;
