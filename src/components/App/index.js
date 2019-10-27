// Main Imports
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

// Custom Imports
import Layout from '~/templates/Layout';
import PrivateRoute from '~/components/PrivateRoute';

// Page Imports
import HomePage from '~/pages/home';
import AboutPage from '~/pages/about';
import LoginPage from '~/pages/login';
import TopicsPage from '~/pages/topics';
import PrivatePage from '~/pages/private';

// Style Imports
// import './index.scss';

const App = () => (
  <div className='app'>
    <Layout>
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

export default withRouter(App);
