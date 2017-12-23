import React from "react";
import { connect } from "react-redux";

class SignUpSuccess extends React.Component {
  render() {
    let { first_name } = this.props.user;

    return (<div>Thank you for signing up {first_name}!</div>);
  }
}

function mapStateToProps(state) {
  return {
    user: state.user || {},
  };
}
export default connect(mapStateToProps)(SignUpSuccess);
