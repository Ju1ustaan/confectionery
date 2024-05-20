import React, { useState, useRef } from 'react'
import s from './style.module.css'

const Checkbox = ({ item }) => {
    const [check, setCheck] = useState(false)
    const [count, setCount] = useState(0)
    const test = useRef()

    const checked = () => {
        setCheck(test.current.checked);
        test.current.checked? setCount(1): setCount(0)
    }

    const increment = () => setCount((prev) => prev < 5? prev + 1: prev)
    const decrement = () => setCount((prev) => prev > 0? prev - 1: setCheck(false))
    return (
        <div className='flex justify-between' >
            <label className={s.container} onClick={checked}>{item.text}
                <p>{item.price}</p>
                <input type="checkbox" name='nuts' checked={check} ref={test}/>
                <span className={s.checkmark}></span>
            </label>
            <div className='flex items-center'>
                <button className={s.btn} onClick={increment} disabled={!check}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                    </svg>
                </button>
                <input type="number" max={5} min={0} defaultValue={0} disabled={!check} value={count} className={s.count}/>
                <button className={s.btn} onClick={decrement} disabled={!check}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                </button>
            </div>
        </div>
    )
}

export default Checkbox