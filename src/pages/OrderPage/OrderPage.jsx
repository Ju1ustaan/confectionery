import React from 'react'
import s from './style.module.css'
import { Outlet } from 'react-router-dom'
import TotalCard from '../../components/TotalCard/TotalCard'
import Categories from '../../components/Categories/Categories'

const OrderPage = () => {


  return (
    <div className={`${s.order} container`}>
      <div className='flex px-10'>
        <Categories/>
      </div>
      <div className={s.wrapper}>
        <Outlet />
        <TotalCard />
      </div>
    </div>
  )
}

export default OrderPage