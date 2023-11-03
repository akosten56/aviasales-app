import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateRelevanceFilter } from '../../actions/actionCreators'

import cl from './RelevanceFilter.module.scss'

const RelevanceFilter = () => {
  const filter = useSelector((state) => state.relevanceFilter)
  const dispatch = useDispatch()

  const handleUpdateFilter = (filter) => {
    dispatch(updateRelevanceFilter(filter))
  }

  return (
    <ul className={cl['relevance-filter']}>
      <li
        className={`${cl['relevance-filter__item']} ${filter === 'cheapest' ? cl['active'] : null}`}
        onClick={() => handleUpdateFilter('cheapest')}
      >
        <button type="button">Самый дешевый</button>
      </li>
      <li
        className={`${cl['relevance-filter__item']} ${filter === 'fastest' ? cl['active'] : null}`}
        onClick={() => handleUpdateFilter('fastest')}
      >
        <button type="button">Самый быстрый</button>
      </li>
      <li
        className={`${cl['relevance-filter__item']} ${filter === 'optimal' ? cl['active'] : null}`}
        onClick={() => handleUpdateFilter('optimal')}
      >
        <button type="button">Оптимальный</button>
      </li>
    </ul>
  )
}

export default RelevanceFilter
