import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { Link } from 'react-router-dom';

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    );
  }
}
