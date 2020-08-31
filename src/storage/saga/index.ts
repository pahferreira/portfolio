import { all, fork } from 'redux-saga/effects'

// Sagas
import authSaga from './auth'
import layoutSaga from './layout'

export default function* rootSaga() {
  yield all([fork(authSaga), fork(layoutSaga)])
}
