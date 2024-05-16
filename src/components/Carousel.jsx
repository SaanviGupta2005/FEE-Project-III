import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="src\assets\main picture.png" alt="Slide 1" />
            </div>
            <div>
                <img src="src\assets\model.png" alt="Slide 2" />
            </div>
            <div>
                <img src="src\assets\picture 10.png" alt="Slide 3" />
            </div>
        </Slider>
    );
}

export default Carousel;
