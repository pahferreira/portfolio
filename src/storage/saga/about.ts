import { call, all, put, takeLatest } from 'redux-saga/effects'
import { Types, request, success, fulfill } from '../ducks/about'
import { getAboutContent } from 'services/About'
import { TAction } from 'types/storage'

function* loadAboutContent(action: TAction) {
  yield put(request())
  try {
    const { currentLanguage } = action.payload
    const data = yield call(getAboutContent, currentLanguage)
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
