import React from 'react'
import Carousel_slider from '../../../components/Slider/Carousel_slider'
function Community_page() {
  return (
   <>
        <div className='min-h-[100vh] mt-17 md:mt-16'>
                <Sliding_div />
        </div>
   </>
  )
}

export default Community_page

function Sliding_div() {
    // First container -->>>
    return (
        <>
            <div>
                <Carousel_slider>
                    <div className='h-96 w-1/2 bg-red-500'>
                        Here needs and cards container.
                    </div>
                </Carousel_slider>
            </div>
        </>
    )
}