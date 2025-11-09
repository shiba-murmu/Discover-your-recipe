import React, { useEffect, useState } from "react";
import img1 from '../../assets/image/static/png_type/1.png'
import img2 from '../../assets/image/static/png_type/2.png'
import img3 from '../../assets/image/static/png_type/3.png'
import img4 from '../../assets/image/static/png_type/4.png'
import img5 from '../../assets/image/static/png_type/5.png'
import img6 from '../../assets/image/static/png_type/6.png'
import Fade_slider from '../../components/Slider/Fade_slider'
import "./Landing_page.css";
import Redirect_button from "../../components/RedirectButton/Redirect_button";
import { Link } from 'react-router-dom';



function Landing_page() {
    return (
        <>
            <div className="min-h-screen w-screen bg-[#4f7c83] flex flex-col items-center justify-center">
                <div className="text-4xl md:text-7xl font-bold text-white mb-10 text-center font-bolder">
                    Welcome to Foodie Media
                </div>
                <div className="h-[30vh] w-[30vh] md:h-[40vh] md:w-[40vh] flex items-center justify-center">
                    <Fade_slider>
                        {
                            [img1, img2, img3, img4, img5, img6].map((img, index) => (
                                <div key={index} className="h-[30vh] w-[30vh] flex items-center justify-center">
                                    <img src={img} alt={`Slide ${index + 1}`} className="h-full w-full object-contain" />
                                </div>
                            ))
                        }
                        
                    </Fade_slider>
                </div>
                <div className="mt-10 mb-10">
                    <Link className='inline-block text-md  px-7 py-2 rounded-md font-semibold bg-white hover:bg-gray-100
                    hover:text-black transition duration-300 border border-gray-400 ease-in-out' to="/home">
                        Get Started
                    </Link>
                </div>
                <div className="absolute hidden md:block  z-20 bottom-15 md:bottom-8 max-w-2xl text-center px-4 md:px-0 text-sm md:text-lg font-light text-white">
                    <p>
                        A global platform where anyone can share their recipes, explore diverse cuisines, and connect with a community of food lovers.
                        Start your culinary journey today!
                    </p>
                </div>

            </div>
        </>
    )
}

export default Landing_page