import { all, call, takeLatest, put } from 'redux-saga/effects'
import { Types, request, fulfill, success } from '../ducks/home'
import { getHomeContent } from 'services/Home'
import { TAction } from 'types/storage'

function* loadHomeContent(action: TAction) {
  yield put(request())
  try {
    const { currentLanguage } = action.payload
    const data = yield call(getHomeContent, currentLanguage)
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
