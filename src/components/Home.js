import React from "react";
import { connect } from "react-redux";
import User from "./common/User";

class Home extends React.Component {
  render() {
    let { user } = this.props;
    let userEl = user.id ? <User user={user} /> : <span>No user yet</span>;

    return (
      <div className="page-home">
        <h4>Hello {this.props.user.first_name || 'Friend'}!</h4>

        { userEl }
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
