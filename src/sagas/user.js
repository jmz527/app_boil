import { call, put } from "redux-saga/effects";
import ApiUsers from "../api/users";

export function* getUsers() {
  const users = yield call(ApiUsers.getUsers);

  yield put({
    type: 'ALL_USERS',
    user: { users: users },
  })
}

export function* authUser(action) { // call the api to check the user
  const user = yield call(() => ApiUsers.authenticate(action.user));

  yield put({
    type: user.id ? 'AUTHENTICATED_USER_SUCCESS' : 'AUTHENTICATED_USER_FAILURE',
    user: user,
  });

  action.callbackSuccess(); // success
}

export function* addEditUser(action) { // call the api to add/edit the user
  const user = yield call(() => ApiUsers.addEdit(action.user));
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the user
  yield put({
    type: action.user.id ? 'USERS_EDIT_SAVE' : 'USERS_ADD_SAVE',
    user: user,
  });

  action.callbackSuccess(); // success
}

export function* deleteUser(action) { // call the api to delete the user
  yield call(() => ApiUsers.delete(action.user.id));

  // update the state by removing the user
  yield put({
    type: 'LOGOUT',
    user: {}
  });

  action.callbackSuccess(); // success
}
