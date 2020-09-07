import { combineReducers } from 'redux'
import { TAction, TStore } from 'types/storage'
import { EGlobalActions } from 'enums/actions'
// Reducers
import auth from './auth'
import layout from './layout'
import home from './home'
import about from './about'
import skills from './skills'
import notFound from './notFound'

const appReducer = combineReducers<TStore | undefined, TAction>({
  auth,
  layout,
  home,
  about,
  skills,
  notFound,
})

export default (state: TStore, action: TAction) => {
  if (action.type === EGlobalActions.RESET) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}
