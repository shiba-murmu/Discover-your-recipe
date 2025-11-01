import React from 'react'
import img1 from '../../../../assets/image/static/png_type/1.png'
import img2 from '../../../../assets/image/static/png_type/2.png'
import img3 from '../../../../assets/image/static/png_type/3.png'
import img4 from '../../../../assets/image/static/png_type/4.png'
import Fade_slider from '../../../../components/Slider/Fade_slider'
import { useNavigate } from 'react-router-dom'


function Container_three() {
    const navigate = useNavigate();
    const handleDiscoverClick = () => {
        navigate('/community');
    };
    return (
        <>
            <div className='bg-[#4f7c83] dark:bg-gray-900 w-full h-auto py-10 md:py-5'>
                <div className='text-center  md:my-10'>
                    <h3 className='text-4xl md:text-6xl font-bolder text-white'>Trending recipe</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full h-auto px-5 md:px-20'>
                    <div className='w-full h-[400px] md:h-[80vh] flex justify-center items-center'>
                        <Fade_slider>
                            {[img1, img2, img3, img4].map((imgSrc, index) => (
                                <div key={index} className='w-full h-[400px] md:h-[80vh] flex justify-center items-center'>
                                    <img src={imgSrc} alt={`Slide ${index + 1}`} className='w-auto h-full object-contain' />
                                </div>
                            ))}
                        </Fade_slider>
                    </div>
                    <div className='flex flex-col justify-center gap-5 items-start px-2 md:px-10'>
                        <h3 className='text-4xl md:text-5xl font-bolder mb-5 text-yellow-500'>Delicious Food</h3>
                        <p className='text-md md:text-xl text-white'>Explore a variety of mouth-watering recipes that are easy to make and perfect for any occasion. From quick snacks to gourmet meals, find your next favorite dish here!</p>

                        <p className='text-md md:text-xl text-white'>
                            Whether you're a beginner or a seasoned chef, our step-by-step guides and tips will help you create culinary masterpieces that will impress your family and friends.
                        </p>

                        <p className='text-md md:text-xl text-white'>Join our community of food lovers and share your culinary creations with us!</p>
                        <button onClick={handleDiscoverClick} className='bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded mt-5'>Discover Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container_three