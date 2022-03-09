
import { all } from 'redux-saga/effects';
import { watchAddUser, watchGetUser, watchUpdateUser, watchDeleteUser } from './contactSaga';

export default function * rootSaga(){
  yield all([
    watchAddUser(),
    watchGetUser(),
    watchUpdateUser(),
    watchDeleteUser()
  ])
}