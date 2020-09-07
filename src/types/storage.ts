import { EGlobalActions } from 'enums/actions'
import { TState as TAuthState } from 'types/auth'
import { TState as TLayoutState } from 'types/layout'
import { TState as THomeState } from 'types/home'
import { TState as TAboutState } from 'types/about'
import { TState as TSkillsState } from 'types/skills'
import { TState as TNotFoundState } from 'types/notFound'

export type TStore = {
  auth: TAuthState
  layout: TLayoutState
  home: THomeState
  about: TAboutState
  skills: TSkillsState
  notFound: TNotFoundState
}

export type TAction = {
  type: EGlobalActions | string
  payload: any
}
