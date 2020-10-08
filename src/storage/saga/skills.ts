import { call, all, takeLatest, put } from 'redux-saga/effects'
import { Types, request, fulfill, success } from '../ducks/skills'
import { getSkillsContent } from 'services/Skills'
import { TAction } from 'types/storage'

function* loadSkillsContent(action: TAction) {
  yield put(request())
  try {
    const { currentLanguage } = action.payload
    const data = yield call(getSkillsContent, currentLanguage)
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
