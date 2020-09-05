import { TState } from 'types/home'
import { TAction } from 'types/storage'

// Action Types
export const Types = {
  TRIGGER: 'HOME/TRIGGER',
  REQUEST: 'HOME/REQUEST',
  SUCCESS: 'HOME/SUCCESS',
  FULFILL: 'HOME/FULFILL',
}

// Initial State
const initialState: TState = {
  top_message: '',
  bottom_message: '',
  qualities: [],
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
