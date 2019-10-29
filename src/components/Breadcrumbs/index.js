// Main Imports
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom Imports
import { toTitleCase } from '~/utilities';

const Breadcrumbs = ({ location: { pathname } }) => {
  var here = pathname.split('/').slice(1);

  var parts = [{ 'text': 'Home', 'link': '/' }];

  for( var i = 0; i < here.length; i++ ) {
    var part = here[i];
    var text = toTitleCase(part);
    var link = '/' + here.slice( 0, i + 1 ).join('/');
    parts.push({ 'text': text, 'link': link });
  };

  return (
    <ul>
      { parts.map((part, idx) => {
        return <li key={idx}><Link to={part.link}>{part.text}</Link></li>;
      })}
    </ul>
  );
};
Breadcrumbs.propTypes = {
  loginSuccess: PropTypes.bool,
  location: PropTypes.object
};

function mapStateToProps(state) {
  return {
    loginSuccess: state.user.loginSuccess
  };
}

export default withRouter(connect(mapStateToProps)(Breadcrumbs));

