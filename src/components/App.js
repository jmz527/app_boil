import React from "react";
import { connect } from "react-redux";
import Menu from "./common/Menu";
import UserMenu from "./common/UserMenu";
import User from "./common/User";
import "../stylesheets/main.scss";

class App extends React.Component {
  // componentWillMount() {
  //   this.props.dispatch({type: 'FETCH_ALL'})
  // }


  render() {
    let { children, user } = this.props;
    let menu = user.id ? <UserMenu/> : <Menu/>;
    let userEl = user.id ? <User user={user} /> : <span/>;

    return (
      <div className="container">
        <div>
          {menu}
        </div>
        <div>
          {children}
          {userEl}
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user || {},
  };
}
export default connect(mapStateToProps)(App);
