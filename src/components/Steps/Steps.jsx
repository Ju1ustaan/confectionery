import React from 'react'
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import Radio from '../Radio/Radio'
import Checkbox from '../Checkbox/Checkbox'
import Decor from '../Decor/Decor'

const categories = {
    Fillings: 'Начинки',
    nuts: 'Орехи',
    decor: 'Оформление',
    candles: 'Свечи',
    signature: 'Подпись'
}

const fillings = [
    {
        id: 1,
        text: 'Кремовы',
        price: '2500 сом',
        weight: '1кг'
    },
    {
        id: 2,
        text: "Медовый",
        price: '2500 сом',
        weight: '1кг'
    },
    {
        id: 3,
        text: "Творожный",
        price: '2500 сом',
        weight: '1кг'
    },
    {
        id: 4,
        text: "Шоколадный",
        price: '2500 сом',
        weight: '1кг'
    },
]

const nuts = [
    {
        text: 'Грецкий орех 50г',
        price: '100 сом',
        quantity: '1 пор.'
    },
    {
        text: "Миндаль 50г",
        price: '100 сом',
        quantity: '1 пор.'
    },
    {
        text: "Фундук 50г",
        price: '100 сом',
        quantity: '1 пор.'
    },
    {
        text: "Кешью 50г",
        price: '100 сом',
        quantity: '1 пор.'
    },
]

const Steps = () => {
    const { id } = useParams()

    return (
        <div className='p-5'>
            <div className='flex items-center  mb-5'>
                <div className='text-2xl font-bold text-center capitalize'>
                    <p>{categories[id]}</p>
                </div>
            </div>
            <div className={s.wrapper}>
                {categories[id] === 'Начинки' ? fillings.map((i, idx) => <Radio key={idx} item={i} />) : null}
                {categories[id] === 'Орехи' ? nuts.map((i, idx) => <Checkbox key={idx} item={i} />) : null}
                {categories[id] === 'Оформление' ? <Decor/> : null}
            </div>
        </div>
    )
}

export default Steps