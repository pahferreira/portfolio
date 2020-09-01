import { call, all, put, takeLatest } from 'redux-saga/effects'
import { Types, request, success, fulfill } from '../ducks/about'
import { getAboutContent } from 'services/About'

function* loadAboutContent() {
  yield put(request())
  try {
    const data = yield call(getAboutContent)
    if (data) {
      yield put(success(data))
    }
  } catch (error) {
  } finally {
    yield put(fulfill())
  }
}

export default function* aboutSaga() {
  yield all([takeLatest(Types.TRIGGER, loadAboutContent)])
}
