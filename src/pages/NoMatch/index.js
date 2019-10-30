// Main Imports
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom Imports
import ReturnButton from '~/components/ReturnButton';

// Style Imports
// import './index.scss';

const NoMatchPage = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
    <ReturnButton />
  </div>
);
NoMatchPage.propTypes = {
  location: PropTypes.string
};

export default withRouter(NoMatchPage);
