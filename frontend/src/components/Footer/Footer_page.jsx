import React from 'react'
import { Link } from 'react-router-dom';
function Footer_page() {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <div id='footer' className='w-full h-[70vh] md:h-[70vh]  bg-[#113d3c] text-white p-4 pt-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-4 md:pl-15'>
                        <div className=' md:pb-5'>
                            <span className='text-3xl'>FOODIEMEDIA</span>
                        </div>
                        <div className='md:mb-10 '>
                            <p className='w-97 md:w-96'>
                                Empowering Food Lovers Everywhere and Connecting Culinary Enthusiasts Worldwide.
                                People who love food and cooking.
                            </p>
                        </div>
                        <div className='flex gap-4 md:mb-10'>
                            Social media icons
                        </div>
                        <div>
                            <button onClick={goToTop} className='bg-[#256D6B] px-4 py-2 rounded-md hover:bg-[#1e5554] cursor-pointer'>
                                back to top
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            some more options will be added here
                        </div>
                        <div>
                            Legal terms and conditions privacy policy
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Footer_page