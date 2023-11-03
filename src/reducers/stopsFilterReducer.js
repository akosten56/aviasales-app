import { actionTypes } from '../actions/actionTypes'

const initialState = { all: true, zero: true, one: true, two: true, three: true }

export const stopsFilterReducer = (state = initialState, action) => {
  const { type, payload } = action
  const newState = { ...state }

  switch (type) {
    case actionTypes.UPDATE_STOPS_FILTER:
      newState[payload] = !state[payload]
      if (payload === 'all' && !state.all) {
        return initialState
      }
      if (payload === 'all' && state.all) {
        return { all: false, zero: false, one: false, two: false, three: false }
      }
      if (newState.zero && newState.one && newState.two && newState.three) {
        newState.all = true
      }
      if (!newState.zero || !newState.one || !newState.two || !newState.three) {
        newState.all = false
      }
      return newState

    default:
      return state
  }
}
