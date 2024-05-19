import React from 'react'
import NavigateBtn from '../../components/NavigateBtn/NavigateBtn'
import s from './style.module.css'
import testImg from '../../assets/images/blue-background.jpg'

const MainPage = () => {
  const navigateBtnOption = {
    path: '/order-page/1',
    text: 'Торт на заказ',
    fontSize: 'text-xl',
    fontWegth: 'font-bold',
    rounded: 'rounded-lg'
  }
  return (
    <div className='container'>
      <div className={s.wrapper}>
        <div className={s.info}>
          <h3 className={s.title}>
            Маленькая информация о кондитерке
          </h3>
          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam quidem similique deleniti corporis et iusto, sed non libero fuga ex nostrum doloremque asperiores omnis nesciunt, maxime, nobis labore quos?
          </p>
        </div>
        <div className={s.img}>
          <img src={testImg} alt="" />
        </div>
      </div>
      <div className={s.order}>
        <hr className='my-10' />

        <div className={s.btn}>
          <NavigateBtn navigateBtnOption={navigateBtnOption} />
        </div>
        <p className={`${s.title}  mb-5 text-center`}>Как оформить заказ?</p>
        <div className={s.manual}>
            <div className={s.orderList}>1</div>
            <p className={s.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed, nemo dolorem, qui incidunt dolores consequuntur similique tenetur quos ea, ut fugiat! Nemo numquam perspiciatis obcaecati dolore itaque eaque aliquid.</p>
        </div>
        <div className={s.manual}>
            <div className={s.orderList}>2</div>
            <p className={s.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit quos, dignissimos necessitatibus culpa assumenda inventore reiciendis placeat explicabo incidunt odit quia amet debitis? Laborum quae voluptatum dolores dolorem ipsum ea ipsam quis odit sapiente!</p>
        </div>
        <div className={s.manual}>
            <div className={s.orderList}>3</div>
            <p className={s.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate et explicabo ea ratione cupiditate ullam quod assumenda laudantium quae consequuntur facilis aperiam molestias, tempora consequatur neque eveniet quidem. Nesciunt sequi delectus voluptas accusantium veritatis omnis possimus pariatur vel exercitationem reiciendis?</p>
        </div>
        <div className={s.manual}>
            <div className={s.orderList}>4</div>
            <p className={s.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at, omnis illo quis delectus accusamus dolores magni? Omnis, alias, laboriosam quo obcaecati esse suscipit, libero iusto perspiciatis dolores illo quibusdam!</p>
        </div>
        <div className={s.manual}>
            <div className={s.orderList}>5</div>
            <p className={s.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at, omnis illo quis delectus accusamus dolores magni? Omnis, alias, laboriosam quo obcaecati esse suscipit, libero iusto perspiciatis dolores illo quibusdam!</p>
        </div>
        <div className={s.manual}>
            <div className={s.orderList}>6</div>
            <p className={s.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate et explicabo ea ratione cupiditate ullam quod assumenda laudantium quae consequuntur facilis aperiam molestias, tempora consequatur neque eveniet quidem. Nesciunt sequi delectus voluptas accusantium veritatis omnis possimus pariatur vel exercitationem reiciendis?</p>
        </div>
      </div>
      <div className={s.contacts}>
        <hr className='my-10' />
        <div >
          <h3 className={s.title}>
            Как нас найти?
          </h3>
          
          <div className={s.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.053460240025!2d76.86806387580869!3d43.22933877974231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692376018077%3A0x33b6e04a72740f40!2z0KLQvtGA0YLRiyDQkNC70LzQsNGC0Ys!5e0!3m2!1sru!2skz!4v1716068212389!5m2!1sru!2skz" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className={s.icons}>
            <div className={s.social}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
            </div>
            <div className={s.social}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
            </div>
            <div className={s.social}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>
            </div>
            <div className={s.social}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"/></svg>
            </div>
            <div className={s.social}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
            </div>
            <div className={s.social}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"/></svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainPage