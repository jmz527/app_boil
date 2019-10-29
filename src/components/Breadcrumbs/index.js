// Main Imports
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom Imports
import { toTitleCase } from '~/utilities';

// Style Imports
import './index.scss';

const Breadcrumbs = ({ location: { pathname } }) => {
  let parts = [{ 'text': 'Home', 'link': '/' }];

  if (pathname !== '/') {
    const here = pathname.split('/').slice(1);

    for( let i = 0; i < here.length; i++ ) {
      let part = here[i];
      let text = toTitleCase(part);
      let link = '/' + here.slice( 0, i + 1 ).join('/');
      parts.push({ 'text': text, 'link': link });
    };
  }

  return (
    <ul className="breadcrumbs">
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

