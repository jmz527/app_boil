import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { store, history } from "./store.js";
import { connect } from "react-redux";
// import { readUserCookie, isCookie, getCookie } from './util/user_util';

// import App from "./components/App";
import Menu from "./components/common/Menu";
import UserMenu from "./components/common/UserMenu";
import "./stylesheets/main.scss";
import Home from "./components/Home";
import About from "./components/About";
// import UserLogin from './components/UserLogin';
// import UserEdit from './components/UserEdit';
// import SimpleForm from './components/SimpleForm';

// import NotFound from "./components/NotFound";

// import LoginSuccess from './components/LoginSuccess';
// import SignUpSuccess from './components/SignUpSuccess';
// import UsersList from './components/UsersList';

/**
 * Please keep routes in alphabetical order
 */
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
	<div className="container">
		<Menu />

		<hr/>

		<main>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="login" component={formWrap} />
			<Route path="signup" component={formWrap} />

		</main>

		<div className="footer"></div>
	</div>
  </Router>
);

// export
export { router };

const formWrap = () => (
  <div className="form-wrap">

  </div>
)


	// <div>
	// 	{menu}
	// </div>
	// <div>
	// 	{children}
	// 	{userEl}
	// </div>