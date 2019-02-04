// Main Imports
import * as actionTypes from './actionTypes';
import * as utilities from '~/utilities';

// Data Imports
import data from '~/data/topics.json';

export const fetchTopicsRequest = (dispatch) => {
  // Initial dispatch for "fetching topics..." state
  dispatch({
    type: actionTypes.FETCH_TOPICS_REQUEST
  });

  /*
   * This is an example of how you would potentially perform an HTTP request to an API endpoint:
   *
   * axios.get(`${process.env.TOPICS_API_NAME}/api/topics`)
   *   .then((response) => {
   *     dispatch(fetchTopicsSuccess(
   *       utilities.clone(response.data)
   *     ));
   *   })
   *   .catch((error) => {
   *     dispatch(fetchTopicsFailure(error));
   *   });
   */

  /*
   * This is an example of how you would potentially load fake data from a JSON file (fixture):
   */
  setTimeout(() => {
    try {
      let topics = data.topics.map((topic) => {
        return utilities.clone(topic);
      });

      dispatch(fetchTopicsSuccess(topics));
    }
    catch(error) {
      dispatch(fetchTopicsFailure(error));
    }
  }, 1000);
};

const fetchTopicsSuccess = (data) => {
  return {
    payload: data,
    type: actionTypes.FETCH_TOPICS_SUCCESS
  };
};

const fetchTopicsFailure = (data) => {
  return {
    payload: data,
    type: actionTypes.FETCH_TOPICS_FAILURE
  };
};
