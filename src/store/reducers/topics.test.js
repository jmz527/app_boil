// Action Types
import * as actionTypes from '~/store/actions/actionTypes';

// Data
import data from '~/data/topics.json';

// Utilities
import * as utilities from '~/utilities';

// Custom
import reducer from './topics';

describe('topics reducer', () => {
  const initialState = {
    ids: [],
    objects: []
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it.skip('should store the topics upon successful fetching', () => {
    const topics = data.topics.map((topic) => {
      return utilities.clone(topic);
    });

    expect(reducer(initialState, {
      payload: topics,
      type: actionTypes.FETCH_TOPICS_SUCCESS
    })).toEqual({
      ...initialState,
      ids: utilities.objectsArrayToIdsArray(topics),
      objects: utilities.objectsArrayToObjectsHash(topics)
    });
  });
});
