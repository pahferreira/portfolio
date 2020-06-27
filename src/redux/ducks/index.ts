import { combineReducers } from 'redux'
import { TAction, TStore } from '../../types/storage'
import { EGlobalActions } from '../../enums/actions'

// Reducers
import auth from './auth'

const appReducer = combineReducers<TStore | undefined, TAction>({
  auth
})

export default (state: TStore, action: TAction) => {
  if (action.type === EGlobalActions.RESET) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}
