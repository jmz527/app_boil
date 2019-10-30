// Main Imports
import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom Imports
import TopicItem from '~/components/TopicItem';

// Style Imports
// import './index.scss';

const renderTopicPlaceholder = () => <h3>Please select a topic.</h3>;

const renderTopicLinks = (topic, match) => {
  return (
    <li key={topic.id}>
      <Link to={`${match.url}/${topic.id}`}>
        { topic.title }
      </Link>
    </li>
  );
};

const topicsList = (props) => (
  <div className='topicsList'>
    <ul>
      {
        props.topics.map(topic => renderTopicLinks(topic, props.match))
      }
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={TopicItem}/>
    <Route exact path={props.match.url} render={renderTopicPlaceholder}/>
  </div>
);
topicsList.propTypes = {
  match: PropTypes.object,
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }))
};

const mapStateToProps = (state) => {
  return {
    fetching: state.ui.fetching,
    topics: state.topics.ids.map(id => state.topics.objects[id])
  };
};

export default connect(mapStateToProps)(withRouter(topicsList));
