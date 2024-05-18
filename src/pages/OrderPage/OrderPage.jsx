import React from 'react'
import NavigateBtn from '../../components/NavigateBtn/NavigateBtn'
import s from './style.module.css'
import { Outlet } from 'react-router-dom'
import TotalCard from '../../components/TotalCard/TotalCard'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTest } from '../../actions/action'

const OrderPage = ({ steps }) => {
  const { id } = useParams()
  const navigateBtnOption = {
    path: '/',
    text: 'На главную',
    fontSize: '',
    fontWegth: '',
    rounded: 'rounded-full'
  }
  const { data: todo, isError: todoError, isLoading: todoLoading } = useQuery({ queryKey: ['todo'], queryFn: getTest })


  return (
    <div className={`${s.order} container`}>
      <div className='flex justify-between px-10'>
        {/* <div className={s.btn}>
          <NavigateBtn navigateBtnOption={navigateBtnOption} />
        </div> */}
        <div className='flex justify-between '>
          {
            todo?.data.map((i, idx) => (
              <div key={idx} className={`${s.step} ${i.id < id ? s.active : null}`}>
                <p className={s.text}>{i.id}</p>
              </div>
            ))
          }
        </div>
        <div></div>
      </div>
      <div className={s.wrapper}>
        <Outlet />
        <TotalCard />
      </div>
    </div>
  )
}

export default OrderPage