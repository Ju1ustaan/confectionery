import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import './style.css'


const categories = [
    {
        id: 1,
        title: 'Начинки',
        value: 'Fillings',
        content: ['Кремовы', "Медовый", "Творожный", "Шоколадный"]  
    },
    {
        id: 2,
        title: 'Орехи',
        value: 'nuts',
        content: ['Фисташка', "Грецкий", "Творожный", "Шоколадный"]  
    },
    {
        id: 3,
        title: 'Оформление',
        value: 'decor',
        content: ['Кремовы', "Медовый", "Творожный", "Шоколадный"]  
    },
    {
        id: 4,
        title: 'Свечи',
        value: 'candles',
        content: ['Кремовы', "Медовый", "Творожный", "Шоколадный"]  
    },
    {
        id: 5,
        title: 'Подпись',
        value: 'signature',
        content: ['Кремовы', "Медовый", "Творожный", "Шоколадный"]  
    }
]

const Categories = () => {
  return (
    <div className={`${s.wrapper} flex w-full flex-wrap`}>
        {
            categories.map((i, idx) => (
                <NavLink key={idx} to={`/order-page/${i.value}`}>
                    <div className={s.title}>{i.title}</div>
                </NavLink>
            ))
        }
    </div>
  )
}

export default Categories