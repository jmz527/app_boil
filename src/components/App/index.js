// Main Imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Custom Imports
import MainLayout from '~/templates/MainLayout';
import ErrorBoundary from '~/components/ErrorBoundary';
import PrivateRoute from '~/components/PrivateRoute';

// Page Imports
import * as pages from '~/pages';

// Style Imports
// import './index.scss';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <ErrorBoundary>
        <Switch>
          <Route path='/login' component={pages.LoginPage}/>
          <Route path="/">
            <MainLayout>
              <Switch>
                <Route exact path='/' component={pages.HomePage}/>
                <Route path='/about' component={pages.AboutPage}/>
                <Route path='/topics' component={pages.TopicsPage}/>
                <PrivateRoute path='/private' component={pages.PrivatePage}/>
                <Route component={pages.NoMatchPage} />
              </Switch>
            </MainLayout>
          </Route>
        </Switch>
      </ErrorBoundary>
    </BrowserRouter>
  </div>
);

export default App;
