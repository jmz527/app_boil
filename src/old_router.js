import React from "react";
import { Router, Route, IndexRoute, Switch } from "react-router-dom";
import { store, history } from "./store.js";
import { readUserCookie, isCookie, getCookie } from './util/user_util';

import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import UserLogin from './components/UserLogin';
import UserEdit from './components/UserEdit';
import LoginSuccess from './components/LoginSuccess';
import SignUpSuccess from './components/SignUpSuccess';
import UsersList from './components/UsersList';


const isAuthLoaded = (store) => {
  return store.user.authenticated || false
}

const requireLogin = (nextState, replace, cb) => {
  function checkAuth() {
    const { user } = store.getState();
    if (!user || !user.authenticated) {

      // if (isCookie(document.cookie)) {
      //   console.log('COOKIE EXISTS!!!')

      //   let cookie = JSON.parse(readUserCookie(document.cookie));
        
      //   // more code here
      //   // debugger;

        
      //   store.dispatch({type: 'USER_SAVE', user: cookie})
      //   cb();

      // } else {
      //   // oops, not logged in, so can't be here!
      //   replace('/');
      // }

      // oops, not logged in, so can't be here!
      replace('/');
    }
    cb();
  }

  if (!isAuthLoaded(store.getState())) {
    checkAuth();
  } else {
    cb();
  }
}

const userLogout = (nextState, replace, cb) => {

  // this.props.history.push('/goodbye');


  store.dispatch({type: 'LOGOUT'});
  replace('/goodbye');
  cb();
}

const Goodbye = () => {
  return (
    <div>Thanks for visiting!</div>
  );
}

/**
 * Please keep routes in alphabetical order
 */
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>

      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="logSuccess" component={LoginSuccess}/>
        <Route path="signUpSuccess" component={SignUpSuccess}/>
        <Route path="edit(/:id)" component={UserEdit}/>
        <Route path="users" component={UsersList}/>
      </Route>

      { /* Routes */ }
      <Route path="about" component={About} />
      <Route path="login" component={UserLogin} />
      <Route path="logout" onEnter={userLogout} />
      <Route path="signup" component={UserEdit} />
      <Route path="goodbye" component={Goodbye} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
