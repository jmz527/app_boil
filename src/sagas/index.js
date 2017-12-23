import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { getUsers, authUser, addEditUser, deleteUser } from "./user";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'FETCH_ALL', getUsers),
    fork(takeLatest, 'AUTH_USER', authUser),
    fork(takeLatest, 'ADD_EDIT_USER', addEditUser),
    fork(takeLatest, 'DELETE_USER', deleteUser),
  ];
}
