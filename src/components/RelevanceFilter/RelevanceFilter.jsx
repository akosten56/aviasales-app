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
    <form>
      <ul className={cl['relevance-filter']}>
        <li>
          <label className={`${cl['relevance-filter__item']} ${filter === 'cheapest' ? cl['active'] : null}`}>
            <input type="radio" name="sort" value={'cheapest'} onClick={() => handleUpdateFilter('cheapest')} />
            Самый дешевый
          </label>
        </li>
        <li>
          <label className={`${cl['relevance-filter__item']} ${filter === 'fastest' ? cl['active'] : null}`}>
            <input type="radio" name="sort" value={'fastest'} onClick={() => handleUpdateFilter('fastest')} />
            Самый быстрый
          </label>
        </li>
        <li>
          <label className={`${cl['relevance-filter__item']} ${filter === 'optimal' ? cl['active'] : null}`}>
            <input type="radio" name="sort" value={'optimal'} onClick={() => handleUpdateFilter('optimal')} />
            Оптимальный
          </label>
        </li>
      </ul>
    </form>
  )
}

export default RelevanceFilter
