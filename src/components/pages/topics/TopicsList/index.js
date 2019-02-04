// Main Imports
import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom Imports
import TopicItem from './TopicItem';

// Style Imports
// import './index.scss';

// Renderers
function renderTopicPlaceholder() {
  return <h3>Please select a topic.</h3>;
}

function renderTopicLinks(topic, match) {
  return (
    <li key={topic.id}>
      <Link to={`${match.url}/${topic.id}`}>
        { topic.title }
      </Link>
    </li>
  );
}

const topicsList = (props) => (
  <div className='topicsList'>
    <ul>
      {
        props.data.topics.map(topic => renderTopicLinks(topic, props.data.match))
      }
    </ul>

    <Route path={`${props.data.match.url}/:topicId`} component={TopicItem}/>
    <Route exact path={props.data.match.url} render={renderTopicPlaceholder}/>
  </div>
);
topicsList.propTypes = {
  data: PropTypes.shape({
    match: PropTypes.object,
    topics: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    }))
  })
};

export default withRouter(topicsList);
