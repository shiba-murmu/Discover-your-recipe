import React from 'react'
import DarkModeToggle from '../../utils/Theme/DarkModeToggle'
import food from '../../assets/food.png'
import food_2 from '../../assets/food2.png'
import larger_screen from '../../assets/larger_screen_food.jpg'

function Landing_page() {
  return (
    <> 
        <div>
            {/* For use of image */}
            <img src={food} alt="Food" className='h-[90vh] md:hidden w-full object-cover' />
            <img src={larger_screen} className='hidden md:block h-[90vh] w-full object-cover' alt="" />
        </div>
    </>
  )
}

export default Landing_page