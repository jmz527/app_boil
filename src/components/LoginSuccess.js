import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";

class LoginSuccess extends React.Component {
  render() {
    let { first_name } = this.props.user;

    return (<div>Login success! Nice going, {first_name}!</div>);
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    user: state.user || {},
  };
}
export default connect(mapStateToProps)(LoginSuccess);
