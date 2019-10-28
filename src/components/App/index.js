// Main Imports
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom Imports
import MainLayout from '~/templates/MainLayout';
import PrivateRoute from '~/components/PrivateRoute';

// Page Imports
import * as pages from '~/pages';

// Style Imports
// import './index.scss';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
NoMatch.propTypes = {
  location: PropTypes.string
};

const App = () => (
  <div className='app'>
    <Switch>
      <Route path='/login' component={pages.LoginPage}/>
      <Route path="/">
        <MainLayout>
          <Switch>
            <Route exact path='/' component={pages.HomePage}/>
            <Route path='/about' component={pages.AboutPage}/>
            <Route path='/topics' component={pages.TopicsPage}/>
            <PrivateRoute path='/private' component={pages.PrivatePage}/>
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  </div>
);

export default withRouter(App);
