import { actionTypes } from '../actions/actionTypes'

const initialState = { searchId: null, tickets: [], stopFetching: false }

export const fetchDataReducer = (state = initialState, action) => {
  const { type, tickets, searchId, stopFetching } = action

  const filteredTickets = tickets ? tickets.filter((el) => el.price !== 'error') : tickets

  switch (type) {
    case actionTypes.RECEIVE_SEARCH_ID:
      return { ...state, searchId }
    case actionTypes.REQUEST_TICKETS:
      return { ...state }
    case actionTypes.RECEIVE_TICKETS:
      return { ...state, tickets: [...state.tickets, ...filteredTickets], stopFetching }
    default:
      return state
  }
}
