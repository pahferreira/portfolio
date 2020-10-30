import { TAction } from 'types/storage'
import { TState } from 'types/about'

// Action Types
export const Types = {
  TRIGGER: 'ABOUT/TRIGGER',
  REQUEST: 'ABOUT/REQUEST',
  SUCCESS: 'ABOUT/SUCCESS',
  FULFILL: 'ABOUT/FULFILL',
}

// Initial State
const initialState: TState = {
  section_title: '',
  title: '',
  greeting: '',
  description: '',
  picture: {
    url: '',
  },
  mobile_picture: {
    url: ''
  }
}

// Reducer
export default (state: TState = initialState, action: TAction): TState => {
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
