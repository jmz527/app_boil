// Main Imports
import React from 'react';
import PropTypes from 'prop-types';

// Style Imports
import './index.scss';

const userBar = (props) => {
  const loginButton = <button onClick={() => props.authorizeUserSuccess()}>login</button>;
  const logoutButton = <button onClick={() => props.authorizeUserFailure()}>logout</button>;

  return (
    <div className='userBar'>
      <ul>
        <li> loginSuccess: { props.loginSuccess.toString() }</li>
        <li> user: { JSON.stringify(props.currentUser) }</li>
      </ul>
      <div>
        { props.loginSuccess ? logoutButton : loginButton }
      </div>
    </div>
  );
};
userBar.propTypes = {
  loginSuccess: PropTypes.bool,
  currentUser: PropTypes.object,
  authorizeUserSuccess: PropTypes.func,
  authorizeUserFailure: PropTypes.func
};

export default userBar;