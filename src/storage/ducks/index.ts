import { combineReducers } from 'redux'
import { TAction, TStore } from 'types/storage'
import { EGlobalActions } from 'enums/actions'
// Reducers
import auth from './auth'
import layout from './layout'
import home from './home'

const appReducer = combineReducers<TStore | undefined, TAction>({
  auth,
  layout,
  home,
})

export default (state: TStore, action: TAction) => {
  if (action.type === EGlobalActions.RESET) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}
