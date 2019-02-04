// Main Imports
import React from 'react';
import PropTypes from 'prop-types';

// Style Imports
// import './index.scss';

const topicItem = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
topicItem.propTypes = {
  match: PropTypes.object
};

export default topicItem;
