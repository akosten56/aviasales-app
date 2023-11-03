import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateStopsFilter } from '../../actions/actionCreators'

import cl from './StopsFilter.module.scss'

const StopsFilter = () => {
  const filters = useSelector((state) => state.stopsFilter)
  const dispatch = useDispatch()

  const handleUpdateFilter = (filter) => {
    dispatch(updateStopsFilter(filter))
  }

  return (
    <div className={cl['stops-filter']}>
      <h3 className={cl['stops-filter__title']}>Количество пересадок</h3>
      <ul className={cl['stops-filter__list']}>
        <li className={cl['stops-filter__list-item']}>
          <label>
            <input onChange={() => handleUpdateFilter('all')} type="checkbox" checked={filters.all} />
            Все
          </label>
        </li>
        <li className={cl['stops-filter__list-item']}>
          <label>
            <input onChange={() => handleUpdateFilter('zero')} type="checkbox" checked={filters.zero} />
            Без пересадок
          </label>
        </li>
        <li className={cl['stops-filter__list-item']}>
          <label>
            <input onChange={() => handleUpdateFilter('one')} type="checkbox" checked={filters.one} />1 пересадка
          </label>
        </li>
        <li className={cl['stops-filter__list-item']}>
          <label>
            <input onChange={() => handleUpdateFilter('two')} type="checkbox" checked={filters.two} />2 пересадки
          </label>
        </li>
        <li className={cl['stops-filter__list-item']}>
          <label>
            <input onChange={() => handleUpdateFilter('three')} type="checkbox" checked={filters.three} />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

export default StopsFilter
