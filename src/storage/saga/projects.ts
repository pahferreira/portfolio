import { call, all, put, takeLatest } from 'redux-saga/effects'
import { Types, request, fulfill, success } from 'storage/ducks/projects'
import { getProjectsContent } from 'services/Projects'
import { TAction } from 'types/storage'

function* loadProjectsContent(action: TAction) {
  yield put(request())
  try {
    const { currentLanguage } = action.payload
    const data = yield call(getProjectsContent, currentLanguage)
    if (data) {
      yield put(success(data))
    }
  } catch (error) {
  } finally {
    yield put(fulfill())
  }
}

export default function* projectsSaga() {
  yield all([takeLatest(Types.TRIGGER, loadProjectsContent)])
}
