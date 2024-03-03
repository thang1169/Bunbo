import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slides.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";



const slides = [
    {
        slideSrc: "https://static.vinwonders.com/production/bun-bo-da-lat-banner.jpg"
    },
    {
        slideSrc: "https://bachia.vn/wp-content/uploads/2023/07/bun-bo-hue.jpg"
    },
    {
        slideSrc: "https://media.loveitopcdn.com/37227/thumb/1900x800/4.png?zc=1"
    }

]
export default function Slides() {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
            slidesPerView={1}
            navigation
            effect={"fade"}
            loop={true}
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
            className='slide-item'
        >
            {
                slides.map((slide, index) =>
                    <SwiperSlide key={index}>
                        <div className='image-slide' style={{ width: "100%", backgroundImage: `url(${slide.slideSrc})` }}
                        // src={slide.slideSrc}
                        ></div>
                    </SwiperSlide>)
            }


        </Swiper>
    )
}
