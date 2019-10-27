// Main Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom Imports
import * as actionCreators from '~/store/actions';

// Style Imports
// import './index.scss';

const LoginPage = (props) => {
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
LoginPage.propTypes = {
  loginSuccess: PropTypes.bool,
  currentUser: PropTypes.object,
  location: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


