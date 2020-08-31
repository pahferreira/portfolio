import { EGlobalActions } from 'enums/actions'
import { TState as TAuthState } from 'types/auth'
import { TState as TLayoutState } from 'types/layout'

export type TStore = {
  auth: TAuthState
  layout: TLayoutState
}

export type TAction = {
  type: EGlobalActions | string
  payload: any
}
