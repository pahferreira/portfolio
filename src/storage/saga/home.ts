import { all, call, takeLatest, put } from 'redux-saga/effects'
import { Types, request, fulfill, success } from '../ducks/home'
import Home from 'services/Home'

function* loadHomeContent() {
  yield put(request())
  try {
    const data = yield call(Home.getHomeContent)
    if (data) {
      yield put(success(data))
    }
  } catch (error) {
  } finally {
    yield put(fulfill())
  }
}

export default function* homeSaga() {
  yield all([takeLatest(Types.TRIGGER, loadHomeContent)])
}
