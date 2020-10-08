import { call, all, put, takeLatest } from 'redux-saga/effects'
import { Types, request, fulfill, success } from 'storage/ducks/notFound'
import { TAction } from 'types/storage'
import { getNotFoundContent } from 'services/NotFound'

function* loadNotFoundContent(action: TAction) {
  yield put(request())
  try {
    const { currentLanguage } = action.payload
    const data = yield call(getNotFoundContent, currentLanguage)
    if (data) {
      yield put(success(data))
    }
  } catch (error) {
  } finally {
    yield put(fulfill())
  }
}

export default function* notFoundSaga() {
  yield all([takeLatest(Types.TRIGGER, loadNotFoundContent)])
}
