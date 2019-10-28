// Main Imports
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ReturnButton = (props) => {
  let contentTxt;

  if (props.location.state === undefined) {
    contentTxt = 'Go Back';
  } else {
    contentTxt = `Return to ${props.showPath ? `"${props.location.state.from}"` : 'Previous Page'}`;
  }

  return (
    <button onClick={() => props.history.goBack()}>{`${contentTxt}`}</button>
  );
};
ReturnButton.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  showPath: PropTypes.any
};

export default withRouter(ReturnButton);
