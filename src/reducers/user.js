import { encryptCookie, saveCookie } from '../util/user_util';

// user reducer
export default function user(state = {}, action) {
  switch (action.type) {
    case `AUTHENTICATED_USER_SUCCESS`: {
        return Object.assign({}, action.user, { authenticated: true });
        // return saveCookie(action.user);
    }
      break;
    case `AUTHENTICATED_USER_FAILURE`:
      return { authenticated: false };
      break;
    case 'ALL_USERS':
      return Object.assign({}, state, { users: action.user.users });
      break;
    case 'USERS_ADD_SAVE':
      return Object.assign({}, action.user, { authenticated: true });
      // return saveCookie(user);
      break;
    case 'USERS_EDIT_SAVE':
      return Object.assign({}, action.user, { authenticated: true });
      // return saveCookie(action.user);
      break;
    case 'LOGOUT':
      return { authenticated: false };
      break;
    default:
      return state;
  }
}