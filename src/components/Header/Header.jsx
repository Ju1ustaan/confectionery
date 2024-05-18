import React from 'react'
import s from './style.module.css'

const Header = () => {
  return (
    <div className={` container ${s.header}`}>
        <p className={s.text}>Logo</p>
        <nav className={s.wrapper}>
            <a href="" className={s.link}>Заказать</a>
            <a href="" className={s.link}>О нас</a>
            <a href="" className={s.link}>Контакты</a>
            <a href="" className={s.link}>Отзывы</a>
        </nav>
    </div>
  )
}

export default Header