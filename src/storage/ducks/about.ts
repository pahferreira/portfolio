import { TAction } from 'types/storage'
import { TState } from 'types/about'

// Action Types
export const Types = {
  TRIGGER: 'HOME/TRIGGER',
  REQUEST: 'HOME/REQUEST',
  SUCCESS: 'HOME/SUCCESS',
  FULFILL: 'HOME/FULFILL',
}

// Initial State
const initialState: TState = {
  section_title: 'About me',
  title: 'Pah Ferreira',
  greeting: "Hello, I'm",
  description: `
    My name is Paulo Henrique, but everyone calls me Pah. Why Pah? It's
    a nice history that we can share later. I'm a 27 years old
    developer, who loves Javascript, with almost two years of
    experience. Although the short experience, I was able to face many
    great challenges and overcome then all, growing with each one. But
    enough with the techy talky, let's gossip a little bit about me. I'm
    kinda a mix of calm and happiness, most of the time with good vibes
    and good thoughts, trying to live the bright side of life, and
    always with some friends around to chat and spend some quality time.
    I also love music! Yeah, love it so much that I had a band for a few
    years. Yeah, I'm that guy with a song reference for anything. Always
    communicative, I like to leave things clear and avoid
    misunderstandings in each part of life. It's nice to plan and it's
    even nicer to do it. So, that's it! Thanks for your time and I hope
    we can catch up and spend some time having fun, talking about
    anything, and enjoying some good music. Cya!
  `,
  picture: {
    url: '',
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
