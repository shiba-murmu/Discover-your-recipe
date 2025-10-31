import React from 'react'
import Carousel_slider from '../../../../components/Slider/Carousel_slider'
import Food from '../../../../assets/larger_screen_food.jpg'
import Food2 from '../../../../assets/food2.png'
import Food3 from '../../../../assets/large_food_2.jpg'
function Container_one() {
    return (
        <>
            <Carousel_slider sliding_speed={3000}>
                <div className="relative w-full h-[250px] md:h-[500px]">
                    <img
                        src={Food}
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative w-full h-[250px] md:h-[500px]">
                    <img
                        src={Food2}
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative w-full h-[250px] md:h-[500px]">
                    <img
                        src={Food3}
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </div>
            </Carousel_slider>
        </>
    )
}

export default Container_one