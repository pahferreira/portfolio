import { all, takeLatest, put, call } from 'redux-saga/effects'
import { Types, request, fulfill, success } from 'storage/ducks/layout'
import Layout from 'services/Layout'

function* getLayoutContent() {
  yield put(request())
  try {
    const response = yield call(Layout.getLayout)
    if (response) {
      yield put(success(response))
    }
  } catch (error) {
  } finally {
    yield put(fulfill())
  }
}

export default function* layoutSaga() {
  yield all([takeLatest(Types.TRIGGER, getLayoutContent)])
}
