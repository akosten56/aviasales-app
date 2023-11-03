import { useSelector } from 'react-redux'

import cl from './Spiner.module.scss'
import logo from './avia-logo.png'

const Spiner = () => {
  const { stopFetching } = useSelector((state) => state.fetchData)
  return (
    <div className={cl['spinner-container']} id="up">
      <img className={`${cl['logo']} ${stopFetching ? cl['is-loaded'] : cl['not-loaded']}`} src={logo} alt="" />
      <div className={`${cl['spinner']} ${cl['sphere']} ${stopFetching ? cl['loaded'] : null}`} id="sphere">
        <div className={cl['inner']}>
          <div className={cl['disc']}>
            <img className={cl['logo']} src={logo} alt="" />
          </div>
          <div className={cl['disc']}></div>
          <div className={cl['disc']}></div>
        </div>
      </div>
    </div>
  )
}

export default Spiner
