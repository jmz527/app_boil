// Action Types
import * as actionTypes from '~/store/actions/actionTypes';

// Utilities
import * as utilities from '~/utilities';

const initialState = {
  ids: [],
  objects: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        ids: utilities.objectsArrayToIdsArray(action.payload),
        objects: utilities.objectsArrayToObjectsHash(action.payload, 'id')
      };
    default:
      return state;
  }
};

export default reducer;
