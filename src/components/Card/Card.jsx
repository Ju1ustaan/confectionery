import React, { useState } from 'react'
import s from './style.module.css'
import testImg from '../../assets/images/shokoladnij-tort-17.jpg'
import Dialog from '../Dialog/Dialog'


const Card = ({ item }) => {
  const [check, setCheck] = useState(false);
  const handleCardClick = () => {
    setCheck(true);
  };
  return (
    <div className={`${s.card} ${check ? s.check : ''}`} >
      <div className={s.img} onClick={() => handleCardClick()}>
        <img src={testImg} alt="здесь будет картинка" />
      </div>
      <h3 className={s.title}>{item.name}</h3>
      <p className={s.desc}>{`${item.email} ${item.id}`}</p>
      {
        check && <Dialog title={item.name} setCheck={setCheck} opacity={check} />
      }
    </div>
  );
};

export default Card