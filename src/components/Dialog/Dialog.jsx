import React from 'react'
import s from './style.module.css'
import testImg from '../../assets/images/shokoladnij-tort-17.jpg'
import { useNavigate, useParams } from 'react-router-dom'


const Dialog = ({ title, setCheck, opacity }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const save = () => {
    setCheck(false);
    navigate(`/order-page/${Number(id) + 1}`);
  };

  const close = () => {
    setCheck(false);
    
  };

  return (
    <div className={s.dialog}>
      {title}
      <div className={s.wrapper}>
        <div className={s.img}>
          <img src={testImg} alt="" />
        </div>
        <div className={s.selectWrapper}>
          <p className={s.text}>Количество</p>
          <select className={s.select} name="format" id="format">
            <option value="1">1 шт.</option>
            <option value="2">2 шт.</option>
          </select>
        </div>
        <div className="flex justify-between mt-5">
          <button className={`${s.btn} ${s.cancel}`} onClick={close}>Отмена</button>
          <button className={s.btn} onClick={save}>Выбрать</button>
        </div>
      </div>
    </div>
  );
};
export default Dialog