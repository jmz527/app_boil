import React from "react";
import { connect } from "react-redux";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// UserMenu component
class UserMenu extends React.Component {
  // render
  render() {
    // show the loading state while we wait for the app to load
    const { username } = this.props.user;

    return (
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/users">
          <NavItem>
            Users
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
          <NavItem>
            Logout <Glyphicon glyph="log-out"/>
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/edit">
          <NavItem>
            {this.props.user.username} Account
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}


// export the connected class
function mapStateToProps(state) {
  return {
    user: state.user || {},
  };
}
export default connect(mapStateToProps)(UserMenu);
