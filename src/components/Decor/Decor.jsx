import React, { useState } from 'react'
import s from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../../assets/decor/photo_1.jpg'
import Img2 from '../../assets/decor/photo_2.jpg'
import Img3 from '../../assets/decor/photo_3.jpg'
import Img4 from '../../assets/decor/photo_4.jpg'
import Img5 from '../../assets/decor/photo_5.jpg'
import Img6 from '../../assets/decor/photo_6.jpg'
import Img7 from '../../assets/decor/photo_7.jpg'
import Img8 from '../../assets/decor/photo_8.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const decor = [
    {
        id: 1,
        image: Img1,
        price: '2500сом'
    },
    {
        id: 2,
        image: Img2,
        price: '3000сом'
    },
    {
        id: 3,
        image: Img3,
        price: '2000сом'
    },
    {
        id: 4,
        image: Img4,
        price: '1500сом'
    },
    {
        id: 5,
        image: Img5,
        price: '2000сом'
    },
    {
        id: 6,
        image: Img6,
        price: '2500сом'
    },
    {
        id: 7,
        image: Img7,
        price: '3000сом'
    },
    {
        id: 8,
        image: Img8,
        price: '2500сом'
    },
]

const Decor = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>

            <h2>Категории</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 90,
                    stretch: 0,
                    depth: 1000,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className="mySwiper"
            >
                {
                    decor.map((i) => (
                        <SwiperSlide>
                            <img src={i.image} />
                            <div className={`${s.accordion} ${open ? s.active : ''}`} onClick={() => setOpen(!open)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                                </svg>
                                <p>{i.price}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className={s.btn}>Выбрать</button>
        </div>
    )
}

export default Decor