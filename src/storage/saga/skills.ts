import { call, all, takeLatest, put } from 'redux-saga/effects'
import { Types, request, fulfill, success } from '../ducks/skills'
import { getSkillsContent } from 'services/Skills'

function* loadSkillsContent() {
  yield put(request())
  try {
    const data = yield call(getSkillsContent)
    if (data) {
      yield put(success(data))
    }
  } catch (error) {
  } finally {
    yield put(fulfill())
  }
}

export default function* skillsSaga() {
  yield all([takeLatest(Types.TRIGGER, loadSkillsContent)])
}
