import React from 'react'
import "./Container1.css"
import Navbar from './Navbar'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };
    return (
        <>
            <div id="container1" className='main'>
                <Navbar />
                <div className="carousel">
                <Slider {...settings}>
                    <div>
                        <img src="src\assets\images\main picture.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="src\assets\images\model2.png" alt="Slide 2" />
                    </div>
                    <div>
                        <img src="src\assets\images\model3.png" alt="Slide 3" />
                    </div>
                </Slider>
            </div>
                <div className="newlooks">
                    <p style={{zIndex:20}}>
                        <span>NEW</span>
                        <br />
                        <span style={{fontWeight:500, fontStyle: "italic"}}>SEASON</span>
                        <br />
                        <span style={{color:"rgb(28, 196, 252)"}}> LOOKS </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Container1
