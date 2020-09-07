import { all, takeLatest, put, call } from 'redux-saga/effects'
import { Types, request, fulfill, success } from 'storage/ducks/layout'
import { getLayout } from 'services/Layout'
import { TAction } from 'types/storage'

function* getLayoutContent(action: TAction) {
  yield put(request())
  try {
    const { currentLanguage } = action.payload
    const response = yield call(getLayout, currentLanguage)
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
