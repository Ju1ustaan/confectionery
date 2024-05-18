import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card';
import s from './style.module.css'
import NavigateBtn from '../NavigateBtn/NavigateBtn';
import Dialog from '../Dialog/Dialog';
import { getTestContent } from '../../actions/action';
import { useQuery } from '@tanstack/react-query';
const Steps = () => {
    const { id } = useParams()
const { data: testContnent, isError: testContnentError, isLoading: testContnentLoading, refetch: refetchTestContent } = useQuery({ 
    queryKey: ['testContnent'], 
    queryFn: () => getTestContent(id) })

useEffect(() => {
    console.log(id);
    refetchTestContent()
}, [id])
console.log(testContnent);
    // const nachinka = [
    //     {
    //         title: 'Медовый',
    //         price: '1200 сом',
    //         weith: '500 грамм'
    //     },
    //     {
    //         title: 'Туда сюда',
    //         price: '1200 сом',
    //         weith: '500 грамм'
    //     },
    //     {
    //         title: 'Кремовый',
    //         price: '1200 сом',
    //         weith: '500 грамм'
    //     },
    //     {
    //         title: 'Творожный',
    //         price: '1200 сом',
    //         weith: '500 грамм'
    //     },
    //     {
    //         title: 'Комбо',
    //         price: '1200 сом',
    //         weith: '500 грамм'
    //     },
    // ]


    
    return (
        <div className='p-5'>
            <div className='flex items-center  mb-5'>
                <div className={s.pageNum}>
                <p>{id}</p>
                </div>
                <h2 className='text-2xl font-bold text-center'>Выберите начинку</h2>
            </div>
            <div className={s.wrapper}>
            {
                testContnent?.data.map((i, idx) => (
                    <Card item={i} key={idx}/>
                ))
            }
            </div>
        </div>
    )
}

export default Steps