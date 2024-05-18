import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

const NavigateBtn = ({ navigateBtnOption }) => {
    const { path, text, fontSize, fontWegth, rounded } = navigateBtnOption
    return (
        <Link to={path}>
            <button className={`${s.btn} ${fontSize} ${fontWegth} ${rounded}`}>
                {text}
            </button>
        </Link>
    )
}

export default NavigateBtn