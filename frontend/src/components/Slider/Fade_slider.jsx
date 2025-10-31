import React from "react";
import Slider from "react-slick";
import Food from "../../assets/food.png";
import Food2 from "../../assets/food2.png";
import Food3 from "../../assets/large_food_2.jpg";

function Fade_slider({ children }) {
    const settings = {
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // ✅ Correct spelling
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        cssEase: "linear",       // Smooth fade transition
    };

    return (
        <div className="w-full mx-auto  overflow-hidden">
            <Slider {...settings}> 
               {children}
            </Slider>
        </div>
    );
}

export default Fade_slider;
