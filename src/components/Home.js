import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <h4>Hello {this.props.user.first_name || 'Friend'}!</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user || {},
  };
}
export default connect(mapStateToProps)(Home);
