import { LOGGED_IN, LOGGED_OUT } from '../actions/types'

export const initialState = {
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true
      }
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}