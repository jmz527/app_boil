// Main Imports
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Style Imports
// import './index.scss';

const topicItem = ({ match, fetching, topics }) => {
  let title = '', id = '';

  if (topics.objects[match.params.topicId]) {
    title = topics.objects[match.params.topicId].title;
    id = topics.objects[match.params.topicId].id;
  }

  return (
    <div>
      { fetching && !topics.ids.length ?
        <h3>{match.params.topicId}</h3>
        :
        <h3>{`#${id}: ${title}`}</h3>
      }
    </div>
  );
};
topicItem.propTypes = {
  fetching: PropTypes.bool,
  match: PropTypes.object,
  topics: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    fetching: state.ui.fetching,
    topics: state.topics
  };
};

export default connect(mapStateToProps)(withRouter(topicItem));
