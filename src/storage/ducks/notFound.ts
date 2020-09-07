import { TState } from 'types/notFound'
import { TAction } from 'types/storage'

// Action Types
export const Types = {
  TRIGGER: 'NOT_FOUND/TRIGGER',
  REQUEST: 'NOT_FOUND/REQUEST',
  SUCCESS: 'NOT_FOUND/SUCCESS',
  FULFILL: 'NOT_FOUND/FULFILL',
}

// Initial State
const initialState: TState = {
  title: '',
  subtitle: '',
  message: '',
  url_label: '',
}

// Reducer
export default function (state: TState = initialState, action: TAction) {
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
