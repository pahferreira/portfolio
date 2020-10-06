import { TState } from 'types/projects'
import { TAction } from 'types/storage'

// Action Types
export const Types = {
  TRIGGER: 'PROJECTS/TRIGGER',
  REQUEST: 'PROJECTS/REQUEST',
  SUCCESS: 'PROJECTS/SUCCESS',
  FULFILL: 'PROJECTS/FULFILL',
}

// Initial State
const initialState: TState = {
  section_title: '',
  tech_label: '',
  repo_label: '',
  live: '',
  gallery: '',
  projects: [],
}

// Reducer
export default (state: TState = initialState, action: TAction) => {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case Types.FULFILL:
      return {
        ...state,
        loading: false,
      }
    case Types.SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

// Actions
export const trigger = (currentLanguage: string) => {
  return {
    type: Types.TRIGGER,
    payload: { currentLanguage },
  }
}

export const request = () => {
  return {
    type: Types.REQUEST,
  }
}

export const fulfill = () => {
  return {
    type: Types.FULFILL,
  }
}

export const success = (payload: any) => {
  return {
    type: Types.SUCCESS,
    payload,
  }
}
