import React from 'react'
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
const Decor = () => {
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
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={Img1} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img2} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img3} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img4} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img5} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img6} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img7} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img8} />
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Decor