import { TState } from 'types/layout'
import { TAction } from 'types/storage'

// Action Types
export const Types = {
  TRIGGER: 'LAYOUT/TRIGGER',
  REQUEST: 'LAYOUT/REQUEST',
  SUCCESS: 'LAYOUT/SUCCESS',
  FULFILL: 'LAYOUT/FULFILL',
}

// Initial State
const initialState: TState = {
  header: {
    link: [],
    language: [],
  },
  footer: {
    contact_email: '',
    socials: [],
  },
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
export const trigger = () => {
  return {
    type: Types.TRIGGER,
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
