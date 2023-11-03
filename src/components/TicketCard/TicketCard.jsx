import React from 'react'

import cl from './TicketCard.module.scss'

const TicketCard = ({ price, carrier, segments }) => {
  const formatTime = (time) => {
    const date = new Date(time)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const formatMinutes = (min) => {
    const hours = Math.floor(min / 60)
    const minutes = min % 60
    return `${hours}ч ${minutes}м`
  }

  const formatStops = (stops) => {
    if (stops === 0) return 'без пересадок'
    if (stops === 1) return '1 пересадка'
    if (stops > 1) return `${stops} пересадки`
  }

  const formatPrice = (price) => {
    const newPrice = price.toString().split('')
    newPrice.splice(newPrice.length - 3, 0, ' ')
    newPrice.push(' Р')
    return newPrice.join('')
  }

  const {
    origin: thereOrigin,
    destination: thereDestination,
    date: thereDate,
    duration: thereDuration,
    stops: thereStops,
  } = segments[0]

  const {
    origin: backOrigin,
    destination: backDestination,
    date: backDate,
    duration: backDuration,
    stops: backStops,
  } = segments[1]

  const thereParseDate = new Date(thereDate).getTime()
  const thereStart = formatTime(thereParseDate)
  const thereEnd = formatTime(thereParseDate + thereDuration * 60 * 1000)

  const backParseDate = new Date(backDate).getTime()
  const backStart = formatTime(backParseDate)
  const backEnd = formatTime(backParseDate + backDuration * 60 * 1000)

  return (
    <>
      <div className={cl['ticket-card__overview']}>
        <span className={cl['ticket-card__price']}>{formatPrice(price)}</span>
        <img className={cl['ticket-card__logo']} src={`//pics.avs.io/99/36/${carrier}.png`} alt="" />
      </div>

      <div className={cl['ticket-card__info']}>
        <div className={cl['ticket-card__info-item']}>
          <span className={cl['ticket-card__title']}>
            {thereOrigin} – {thereDestination}
          </span>
          <span className={cl['ticket-card__value']}>
            {thereStart} – {thereEnd}
          </span>
        </div>
        <div className={cl['ticket-card__info-item']}>
          <span className={cl['ticket-card__title']}>В пути</span>
          <span className={cl['ticket-card__value']}>{formatMinutes(thereDuration)}</span>
        </div>
        <div className={cl['ticket-card__info-item']}>
          <span className={cl['ticket-card__title']}>{formatStops(thereStops.length)}</span>
          <span className={cl['ticket-card__value']}>{thereStops.join(', ')}</span>
        </div>
      </div>

      <div className={cl['ticket-card__info']}>
        <div className={cl['ticket-card__info-item']}>
          <span className={cl['ticket-card__title']}>
            {backOrigin} – {backDestination}
          </span>
          <span className={cl['ticket-card__value']}>
            {backStart} – {backEnd}
          </span>
        </div>
        <div className={cl['ticket-card__info-item']}>
          <span className={cl['ticket-card__title']}>В пути</span>
          <span className={cl['ticket-card__value']}>{formatMinutes(backDuration)}</span>
        </div>
        <div className={cl['ticket-card__info-item']}>
          <span className={cl['ticket-card__title']}>{formatStops(backStops.length)}</span>
          <span className={cl['ticket-card__value']}>{backStops.join(', ')}</span>
        </div>
      </div>
    </>
  )
}

export default TicketCard
