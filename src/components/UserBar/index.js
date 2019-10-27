// Main Imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom Imports
import * as actionCreators from '~/store/actions';

// Style Imports
import './index.scss';

const UserBar = (props) => {
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
UserBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);

