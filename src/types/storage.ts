import { EGlobalActions } from 'enums/actions'
import { TState as TAuthState } from 'types/auth'
import { TState as TLayoutState } from 'types/layout'
import { TState as THomeState } from 'types/home'

export type TStore = {
  auth: TAuthState
  layout: TLayoutState
  home: THomeState
}

export type TAction = {
  type: EGlobalActions | string
  payload: any
}
