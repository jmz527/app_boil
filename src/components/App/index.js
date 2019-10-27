// Main Imports
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

// Custom Imports
import MainLayout from '~/templates/MainLayout';
import PrivateRoute from '~/components/PrivateRoute';

// Page Imports
import * as pages from '~/pages';

// Style Imports
// import './index.scss';

const App = () => (
  <div className='app'>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={pages.HomePage}/>
        <Route path='/about' component={pages.AboutPage}/>
        <Route path='/login' component={pages.LoginPage}/>
        <Route path='/topics' component={pages.TopicsPage}/>
        <PrivateRoute path='/private' component={pages.PrivatePage}/>
      </Switch>
    </MainLayout>
  </div>
);

export default withRouter(App);
