// Main Imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

  // Lifecycle hooks
  componentDidMount() {
    this.props.onFetchTopics();
  }

  // Renderers
  renderResults() {
    if (this.props.fetching) {
      return (
        <TopicsListPlaceholder />
      );
    } else {
      return (
        <Aux>
          <TopicsList
            data={{
              match: this.props.match,
              topics: this.props.topics
            }}
            handlers={{
            }}
          />
        </Aux>
      );
    }
  }

  render() {
    return (
      <div className='topicsPage'>
        <h2>Topics</h2>
        { this.renderResults() }
      </div>
    );
  }
}
TopicsPage.propTypes = {
  fetching: PropTypes.bool,
  match: PropTypes.object,
  onFetchTopics: PropTypes.func,
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

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTopics: () => actionCreators.fetchTopicsRequest(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopicsPage));
