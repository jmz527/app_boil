// Main Imports
import { connect } from 'react-redux';

// Custom Imports
import TopicsPage from '~/pages/topics';
import * as actionCreators from '~/store/actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);
