import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spiner from '../Spiner'
import RelevanceFilter from '../RelevanceFilter'
import StopsFilter from '../StopsFilter'
import TicketList from '../TicketList'
import { fetchSearchId, fetchTickets } from '../../actions/actionCreators'

import cl from './App.module.scss'

const App = () => {
  const dispatch = useDispatch()
  const { searchId, tickets, stopFetching } = useSelector((state) => state.fetchData)
  const relevanceFilter = useSelector((state) => state.relevanceFilter)
  const stopsFilter = useSelector((state) => state.stopsFilter)
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    if (!searchId) {
      dispatch(fetchSearchId())
    }
    if (searchId && !stopFetching) {
      dispatch(fetchTickets(searchId))
    }
  }, [searchId, tickets, stopFetching, dispatch])

  useEffect(() => {
    setLimit(5)
  }, [relevanceFilter, stopsFilter])

  const filterAndSortTickets = (tickets) => {
    const zeroStopsTickets = tickets.filter((ticket) => ticket.segments[0].stops.length === 0)
    const oneStopTickets = tickets.filter((ticket) => ticket.segments[0].stops.length === 1)
    const twoStopsTickets = tickets.filter((ticket) => ticket.segments[0].stops.length === 2)
    const threeStopsTickets = tickets.filter((ticket) => ticket.segments[0].stops.length === 3)

    let filtredTickets = []
    if (stopsFilter.zero) filtredTickets = [...filtredTickets, ...zeroStopsTickets]
    if (stopsFilter.one) filtredTickets = [...filtredTickets, ...oneStopTickets]
    if (stopsFilter.two) filtredTickets = [...filtredTickets, ...twoStopsTickets]
    if (stopsFilter.three) filtredTickets = [...filtredTickets, ...threeStopsTickets]
    if (stopsFilter.all) filtredTickets = tickets

    if (relevanceFilter === 'optimal') {
      return filtredTickets
    }
    if (relevanceFilter === 'cheapest') {
      return [...filtredTickets].sort((a, b) => a.price - b.price)
    }
    if (relevanceFilter === 'fastest') {
      return [...filtredTickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    }
  }

  const ticketsData = filterAndSortTickets(tickets).slice(0, limit)

  return (
    <div className={cl['wrapper']}>
      <Spiner />
      <div className={cl['container']}>
        <StopsFilter />
        <div className={cl['section']}>
          <RelevanceFilter />
          <TicketList ticketsData={ticketsData} />
          {ticketsData.length ? (
            <>
              <button className={cl['button']} onClick={() => setLimit((limit) => limit + 5)}>
                Показать еще 5 билетов!
              </button>
              <a href="#up" className={cl['button']}>
                Наверх
              </a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
