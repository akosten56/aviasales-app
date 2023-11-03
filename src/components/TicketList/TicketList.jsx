import React from 'react'
import { useSelector } from 'react-redux'

import TicketCard from '../TicketCard'

import cl from './TicketList.module.scss'

const TicketList = ({ ticketsData }) => {
  const { stopFetching } = useSelector((state) => state.fetchData)

  if (!ticketsData.length && !stopFetching) {
    return <div className={cl['loader']}></div>
  }

  if (!ticketsData.length) {
    return <div className={cl['nothing-found']}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  }

  let id = 10
  const tickets = ticketsData.map((props) => (
    <li key={id++} className={cl['ticket-card']}>
      <TicketCard {...props} />
    </li>
  ))
  return <ul className={cl['ticket-list']}>{tickets}</ul>
}

export default TicketList
