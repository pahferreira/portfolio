import { EGlobalActions } from '../enums/actions'
import { TState as TAuthState } from '../types/auth'

export type TStore = {
  auth: TAuthState
}

export type TAction = {
  type: EGlobalActions | string
  payload: any
}
