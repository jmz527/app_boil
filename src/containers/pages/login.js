// Main Imports
import { connect } from 'react-redux';

// Custom Imports
import LoginPage from '~/components/pages/login';
import * as actionCreators from '~/store/actions';

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
