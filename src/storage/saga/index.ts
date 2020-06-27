import { fork } from 'redux-saga/effects'

// Sagas
import authSaga from './auth'

export default function* rootSaga() {
  yield [fork(authSaga)]
}
