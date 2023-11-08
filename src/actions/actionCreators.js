import { actionTypes } from './actionTypes'

export const updateRelevanceFilter = (filter) => ({
  type: actionTypes.UPDATE_RELEVANCE_FILTER,
  payload: filter,
})

export const updateStopsFilter = (filter) => ({
  type: actionTypes.UPDATE_STOPS_FILTER,
  payload: filter,
})

const receiveSearchId = (data) => ({
  type: actionTypes.RECEIVE_SEARCH_ID,
  searchId: data.searchId,
})

export const fetchSearchId = () => {
  return async (dispatch) => {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    const data = await response.json()
    return dispatch(receiveSearchId(data))
  }
}

const receiveTickets = (data) => ({
  type: actionTypes.RECEIVE_TICKETS,
  tickets: data.tickets,
  stopFetching: data.stop,
})

export const fetchTickets = (searchId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      if (response.ok) {
        const data = await response.json()
        return dispatch(receiveTickets(data))
      } else {
        return dispatch(receiveTickets({ tickets: [{ price: 'error' }] }))
      }
    } catch (error) {
      return dispatch(receiveTickets({ tickets: [{ price: 'error' }] }))
    }
  }
}
