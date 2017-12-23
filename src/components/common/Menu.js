import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/about">
          <NavItem>
            About
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/signup">
          <NavItem>
            Signup <Glyphicon glyph="log-in"/>
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem>
            Login <Glyphicon glyph="log-in"/>
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
