import { all, fork } from 'redux-saga/effects'

// Sagas
import authSaga from './auth'
import layoutSaga from './layout'
import homeSaga from './home'

export default function* rootSaga() {
  yield all([fork(authSaga), fork(layoutSaga), fork(homeSaga)])
}
