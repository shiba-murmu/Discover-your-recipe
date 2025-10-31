// Example: SimpleSlider.jsx
import React from "react";
import Slider from "react-slick";
import Food from '../../assets/food.png';
import Food2 from '../../assets/food2.png';
import Food3 from '../../assets/large_food_2.jpg';


export default function Carousel_slider({children , sliding_speed}) {

    // This components need to be customized as per the requirement
    // For the use of this component you need pass to argument called sliding_speed and children value.
  const settings = {
    dots: false,             // Show navigation dots
    infinite: true,         // Infinite loop sliding..
    speed: 500,             // Slide transition speed in ms
    slidesToShow: 1,        // Number of slides visible at once
    slidesToScroll: 2,      // Number of slides to scroll per swipe/click
    autoplay: true,         // Auto slide
    autoplaySpeed: sliding_speed,   // speed of auto slide in ms
    pauseOnHover: true,     // Pause on hover
    arrows: false,          // Hide next/prev arrows
  };

  return (
    <div className=" mx-auto ">
      {/* <h2 className="text-center text-xl font-bold mb-4">React Slick Example</h2> */}
      <Slider {...settings}>
        {/* <div><img src={Food} alt="Slide 1" /></div>
        <div><img  src={Food2} alt="Slide 2" /></div>
        <div><img  src={Food3} alt="Slide 3" /></div>
        <div><img  src={Food} alt="Slide 4" /></div> */}
        {children}
      </Slider>
    </div>
  );
}
