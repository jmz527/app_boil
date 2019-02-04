// Main Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Style Imports
// import './index.scss';

const loginPage = (props) => {
  const { from } = props.location.state || { from: { pathname: '/' } };

  if (props.loginSuccess) {
    return <Redirect to={from} />;
  }

  return (
    <div className='loginPage'>
      <h2>LOGIN</h2>
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button disabled={props.loginSuccess} onClick={() => props.authorizeUserSuccess()}>Log in</button>
      </div>
    </div>
  );
};
loginPage.propTypes = {
  loginSuccess: PropTypes.bool,
  currentUser: PropTypes.object,
  location: PropTypes.object,
  authorizeUserSuccess: PropTypes.func,
  authorizeUserFailure: PropTypes.func
};

export default loginPage;
