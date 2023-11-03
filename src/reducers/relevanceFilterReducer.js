import { actionTypes } from '../actions/actionTypes'

export const relevanceFilterReducer = (state = 'cheapest', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RELEVANCE_FILTER:
      return action.payload
    default:
      return state
  }
}
