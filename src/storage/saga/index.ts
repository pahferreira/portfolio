import { all, fork } from 'redux-saga/effects'

// Sagas
import authSaga from './auth'
import layoutSaga from './layout'
import homeSaga from './home'
import aboutSaga from './about'
import skillsSaga from './skills'
import notFoundSaga from './notFound'

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(layoutSaga),
    fork(homeSaga),
    fork(aboutSaga),
    fork(skillsSaga),
    fork(notFoundSaga),
  ])
}
