import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={` container ${s.header}`}>
       <Link to='/'>
       <p className={s.text}>Fink</p>
       </Link>
        <nav className={s.wrapper}>
            <a href="#" className={s.link}>Заказать</a>
            <a href="#" className={s.link}>О нас</a>
            <a href="#" className={s.link}>Контакты</a>
        </nav>
    </div>
  )
}

export default Header