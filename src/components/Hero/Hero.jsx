import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slides from "./Slides";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../src/components/Hero/Hero.css'

function HeroSlider(){

    return(
        
            <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      navigation={true}
            >
{  
    slides.map((slide) => (
        <SwiperSlide key={slide.id}>
            <div className="hero-slide hero-slidehomepage" style={
                {
                backgroundImage: `url(${slide.background})`,
                }  
            }>
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <p>{slide.description}</p>
            </div>
           

        </SwiperSlide>
    ))
}
</Swiper>
    )


}
import { Form } from "react-router-dom";


export default HeroSlider;



