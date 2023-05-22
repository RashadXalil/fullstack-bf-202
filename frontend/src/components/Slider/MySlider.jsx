import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MySlider.scss"
const MySlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider {...settings}>
            <div>
                <h3 className="single__slide">
                    <h2>24/7 Customer Support</h2>
                    <div className="btns">
                        <button className="download">Download</button>
                        <button className="Get In Touch">Get In Touch</button>
                    </div>
                </h3>
            </div>
            <div>
                <h3 className="single__slide">
                    <h2>24/7 Customer Support</h2>
                    <div className="btns">
                        <button className="download">Download</button>
                        <button className="Get In Touch">Get In Touch</button>
                    </div>
                </h3>
            </div>
        </Slider>
    )
} 

export default MySlider