// Main Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom Imports
import Aux from '~/components/Aux';
import TopicsList from '~/components/TopicsList';
import * as actionCreators from '~/store/actions';

// Style Imports
// import './index.scss';

export const TopicsListPlaceholder = () => (
  <div>
    Fetching topics...
  </div>
);

export class TopicsPage extends Component {

  componentDidMount() {
    this.props.onFetchTopics();
  }

  render() {
    return (
      <div className='topicsPage'>
        <h2>Topics</h2>
        { this.props.fetching ? 
          <TopicsListPlaceholder />
          :
          <Aux>
            <p>{`${this.props.topicCount} topics total`}</p>
            <TopicsList/>
          </Aux>
        }
      </div>
    );
  }
}
TopicsPage.propTypes = {
  fetching: PropTypes.bool,
  onFetchTopics: PropTypes.func,
  topicCount: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    fetching: state.ui.fetching,
    topicCount: state.topics.ids.length
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTopics: () => actionCreators.fetchTopicsRequest(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);
